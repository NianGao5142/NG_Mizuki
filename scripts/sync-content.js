import { execSync } from "child_process";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { loadEnv } from "./load-env.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const backupDir = path.join(rootDir, ".content-backups");

loadEnv();
console.log("Loaded .env configuration file\n");

// 从环境变量读取配置
const ENABLE_CONTENT_SYNC = process.env.ENABLE_CONTENT_SYNC !== "false"; // 默认启用
const CONTENT_REPO_URL = process.env.CONTENT_REPO_URL || "";
const CONTENT_DIR = process.env.CONTENT_DIR || path.join(rootDir, "content");

console.log("Starting content synchronization...\n");

// 检查是否启用内容分离
if (!ENABLE_CONTENT_SYNC) {
	console.log("Content separation is disabled (ENABLE_CONTENT_SYNC=false)");
	console.log(
		"Tip: Local content will be used, will not sync from remote repository",
	);
	console.log("     To enable content separation feature, set in .env:");
	console.log("     ENABLE_CONTENT_SYNC=true");
	console.log("     CONTENT_REPO_URL=<your-repo-url>\n");
	process.exit(0);
}

// 检查内容目录是否存在
if (!fs.existsSync(CONTENT_DIR)) {
	console.log(`Content directory does not exist: ${CONTENT_DIR}`);
	console.log("Using independent repository mode");

	if (!CONTENT_REPO_URL) {
		console.warn(
			"Warning: CONTENT_REPO_URL not set, will use local content",
		);
		console.log(
			"Tip: Please set CONTENT_REPO_URL environment variable or manually create content directory",
		);
		process.exit(0);
	}

	try {
		console.log(`Cloning content repository: ${CONTENT_REPO_URL}`);
		execSync(`git clone --depth 1 ${CONTENT_REPO_URL} ${CONTENT_DIR}`, {
			stdio: "inherit",
			cwd: rootDir,
		});
		console.log("Content repository cloned successfully");
	} catch (error) {
		console.error("Clone failed:", error.message);
		process.exit(1);
	}
} else {
	console.log(`Content directory already exists: ${CONTENT_DIR}`);

	if (fs.existsSync(path.join(CONTENT_DIR, ".git"))) {
		try {
			console.log("Pulling latest content...");
			execSync("git pull --allow-unrelated-histories", {
				stdio: "inherit",
				cwd: CONTENT_DIR,
			});
			console.log("Content updated successfully");
		} catch (error) {
			console.warn("Content update failed:", error.message);
		}
	}
}

// 创建符号链接或复制内容
console.log("\nSetting up content links...");

const contentMappings = [
	{ src: "posts", dest: "src/content/posts" },
	{ src: "spec", dest: "src/content/spec" },
	{ src: "data", dest: "src/data" },
	{ src: "images", dest: "public/images" },
	{ src: "resources/documents", dest: "public/resources/documents" },
	{ src: "resources/data.ts", dest: "src/content/resources/data.ts" },
];

if (!fs.existsSync(backupDir)) {
	fs.mkdirSync(backupDir, { recursive: true });
}

for (const mapping of contentMappings) {
	const srcPath = path.join(CONTENT_DIR, mapping.src);
	const destPath = path.join(rootDir, mapping.dest);

	if (!fs.existsSync(srcPath)) {
		console.log(`Skipping non-existent source: ${mapping.src}`);
		continue;
	}

	if (fs.existsSync(destPath)) {
		const destStat = fs.lstatSync(destPath);
		if (destStat.isSymbolicLink()) {
			try {
				const realDestPath = fs.realpathSync(destPath);
				const realSrcPath = fs.realpathSync(srcPath);
				if (realDestPath === realSrcPath) {
					console.log(
						`Symbolic link already correct: ${mapping.dest} -> ${mapping.src}`,
					);
					continue;
				}
			} catch (e) {
				// 符号链接可能已损坏，继续处理
			}
		} else {
			const srcStat = fs.statSync(srcPath);
			if (
				!srcStat.isDirectory() &&
				destStat.size === srcStat.size &&
				destStat.mtimeMs >= srcStat.mtimeMs
			) {
				console.log(`File already up to date: ${mapping.dest}`);
				continue;
			}
		}
		const backupPath = path.join(
			backupDir,
			mapping.dest.replace(/\//g, path.sep),
		);
		console.log(
			`Backing up existing content: ${mapping.dest} -> ${backupPath}`,
		);
		if (fs.existsSync(backupPath)) {
			fs.rmSync(backupPath, { recursive: true, force: true });
		}
		const backupParentDir = path.dirname(backupPath);
		if (!fs.existsSync(backupParentDir)) {
			fs.mkdirSync(backupParentDir, { recursive: true });
		}
		fs.renameSync(destPath, backupPath);
	}

	const isDir = fs.statSync(srcPath).isDirectory();

	if (isDir) {
		try {
			const relPath = path.relative(path.dirname(destPath), srcPath);
			fs.symlinkSync(relPath, destPath, "junction");
			console.log(
				`Created symbolic link: ${mapping.dest} -> ${mapping.src}`,
			);
		} catch (error) {
			console.log(`Copying content: ${mapping.src} -> ${mapping.dest}`);
			copyRecursive(srcPath, destPath);
		}
	} else {
		console.log(`Copying content: ${mapping.src} -> ${mapping.dest}`);
		copyRecursive(srcPath, destPath);
	}
}

console.log("\nContent synchronization completed\n");

// 递归复制函数
function copyRecursive(src, dest) {
	if (fs.statSync(src).isDirectory()) {
		if (!fs.existsSync(dest)) {
			fs.mkdirSync(dest, { recursive: true });
		}
		const files = fs.readdirSync(src);
		for (const file of files) {
			copyRecursive(path.join(src, file), path.join(dest, file));
		}
	} else {
		const destDir = path.dirname(dest);
		if (!fs.existsSync(destDir)) {
			fs.mkdirSync(destDir, { recursive: true });
		}
		if (fs.existsSync(dest)) {
			if (fs.lstatSync(dest).isSymbolicLink()) {
				fs.unlinkSync(dest);
			} else {
				fs.rmSync(dest, { force: true });
			}
		}
		fs.copyFileSync(src, dest);
	}
}

// sync-content.js 末尾
// const giteeLatestSha = await getGiteeHeadSha();
// fs.writeFileSync(".content-version", giteeLatestSha + "\n");
// 获取 Gitee 仓库默认分支的最新 commit SHA
async function getGiteeHeadSha() {
	const repoUrl = process.env.CONTENT_REPO_URL; // e.g., https://gitee.com/niangao5142/mizuki-content.git
	const match = repoUrl.match(/https:\/\/gitee\.com\/([^/]+)\/([^/.]+)/);
	if (!match) {
		throw new Error("Invalid Gitee repository URL");
	}
	const [, owner, repo] = match;

	const apiUrl = `https://gitee.com/api/v5/repos/${owner}/${repo}/branches`;
	const response = await fetch(apiUrl);
	if (!response.ok) {
		throw new Error(
			`Failed to fetch branches from Gitee: ${response.status}`,
		);
	}
	const branches = await response.json();
	const defaultBranch =
		branches.find((b) => b.name === "master") || branches[0];
	return defaultBranch.commit.sha;
}

// 在 sync-content.js 末尾
try {
	const giteeLatestSha = await getGiteeHeadSha();
	fs.writeFileSync(".content-version", giteeLatestSha + "\n", "utf8");
	console.log("✅ Wrote content version:", giteeLatestSha);
} catch (err) {
	console.warn("⚠️ Failed to write content version:", err.message);
}

