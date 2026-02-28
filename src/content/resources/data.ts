import type from "node-html-parser/dist/nodes/type";

export interface ResourceDocument {
	id: string;
	title: string;
	filename: string;
	type: "pdf" | "docx";
	description?: string;
	uploadDate: string;
	category?: string;
}

export const resourceDocuments: ResourceDocument[] = [
	// {
	// 	id: "1",
	// 	title: "示例 PDF 文档",
	// 	filename: "badmintonOCR.pdf",
	// 	type: "pdf",
	// 	description: "这是一个示例 PDF 文档，用于测试 PDF 查看器功能",
	// 	uploadDate: "2025-01-15",
	// 	category: "示例文档",
	// },
	// {
	// 	id: "2",
	// 	title: "示例 Word 文档",
	// 	filename: "example.docx",
	// 	type: "docx",
	// 	description: "这是一个示例 Word 文档，用于测试 Word 查看器功能",
	// 	uploadDate: "2025-02-27",
	// 	category: "示例文档",
	// },
	// {
	// 	id: "3",
	// 	title: "毕业设计文档",
	// 	filename: "graduationDesign.docx",
	// 	type: "docx",
	// 	description: "毕业设计相关文档，包含项目设计、实现过程和总结",
	// 	uploadDate: "2025-02-27",
	// 	category: "毕业设计",
	// },
	// {
	// 	id: "4",
	// 	title: "hello",
	// 	filename: "hello.docx",
	// 	type: "docx",
	// 	description: "hello",
	// 	uploadDate: "2025-02-27",
	// 	category: "hello",
	// },
	// {
	// 	id: "5",
	// 	title: "shenlun",
	// 	filename: "shenlun.docx",
	// 	type: "docx",
	// 	description: "shenlun",
	// 	uploadDate: "2025-02-27",
	// 	category: "申论资料",
	// },
	{
		id: "6",
		title: "人物素材",
		filename: "人物素材.pdf",
		type: "pdf",
		description: "申论资料",
		uploadDate: "2025-02-27",
		category: "申论资料",
	},
	{
		id: "7",
		title: "申论-应用文常见文种格式",
		filename: "申论-应用文常见文种格式.pdf",
		type: "pdf",
		description: "申论资料",
		uploadDate: "2025-02-27",
		category: "申论资料",
	},
	{
		id: "8",
		title: "习语30句",
		filename: "习语30句.pdf",
		type: "pdf",
		description: "申论资料",
		uploadDate: "2025-02-27",
		category: "申论资料",
	},
	{
		id: "9",
		title: "精神品质名言诗词",
		filename: "精神品质名言诗词.docx",
		type: "docx",
		description: "申论资料",
		uploadDate: "2025-02-27",
		category: "申论资料",
	},
	{
		id: "10",
		title: "乡村振兴20字总方针",
		filename: "乡村振兴20字总方针.docx",
		type: "docx",
		description: "乡村振兴20字总方针",
		uploadDate: "2025-02-27",
		category: "申论资料",
	},
	{
		id: "11",
		title: "制定国民经济和社会发展第十五个五年规划的建议-原文",
		filename: "制定国民经济和社会发展第十五个五年规划的建议-原文.docx",
		type: "docx",
		description: "制定国民经济和社会发展第十五个五年规划的建议-原文",
		uploadDate: "2025-02-27",
		category: "时政常识",
	},
	{
		id: "12",
		title: "二十届四中全会-整理文件(1)",
		filename: "二十届四中全会-整理文件(1).docx",
		type: "pdf",
		description: "二十届四中全会-整理文件(1)",
		uploadDate: "2025-02-27",
		category: "时政常识",
	},
	{
		id: "13",
		title: "【重点标注】2025年中央经济工作会议(1)",
		filename: "【重点标注】2025年中央经济工作会议(1).docx",
		type: "pdf",
		description: "【重点标注】2025年中央经济工作会议(1)",
		uploadDate: "2025-02-27",
		category: "时政常识",
	},
	// {
	// 	id: "14",
	// 	title: "中国地理思维导图",
	// 	filename: "中国地理思维导图.pdf",
	// 	type: "pdf",
	// 	description: "中国地理思维导图",
	// 	uploadDate: "2025-02-27",
	// 	category: "时政常识",
	// },
	// {
	// 	id: "15",
	// 	title: "人文常识思维导图",
	// 	filename: "人文常识思维导图.pdf",
	// 	type: "pdf",
	// 	description: "人文常识思维导图",
	// 	uploadDate: "2025-02-27",
	// 	category: "时政常识",
	// },
	{
		id: "16",
		title: "行政法思维导图(1)",
		filename: "行政法思维导图(1).pdf",
		type: "pdf",
		description: "行政法思维导图(1)",
		uploadDate: "2025-02-27",
		category: "时政常识",
	},
	{
		id: "17",
		title: "宪法思维导图",
		filename: "宪法思维导图.pdf",
		type: "pdf",
		description: "宪法思维导图",
		uploadDate: "2025-02-27",
		category: "时政常识",
	},
	{
		id: "18",
		title: "哲学思维导图",
		filename: "哲学思维导图.pdf",
		type: "pdf",
		description: "哲学思维导图",
		uploadDate: "2025-02-27",
		category: "时政常识",
	},
	{
		id: "19",
		title: "图推-规律（华图老任）",
		filename: "图推-规律（华图老任）.pdf",
		type: "pdf",
		description: "图推-规律（华图老任）",
		uploadDate: "2025-02-27",
		category: "逻辑推理",
	},
	{
		id: "20",
		title: "类比常识-老任",
		filename: "类比常识-老任.pdf",
		type: "pdf",
		description: "类比常识-老任",
		uploadDate: "2025-02-27",
		category: "逻辑推理",
	},
	{
		id: "21",
		title: "逻辑判断-老任",
		filename: "逻辑判断-老任.pdf",
		type: "pdf",
		description: "逻辑判断-老任",
		uploadDate: "2025-02-27",
		category: "逻辑推理",
	},
	{
		id: "22",
		title: "类比推理",
		filename: "类比推理.pdf",
		type: "pdf",
		description: "类比推理",
		uploadDate: "2025-02-27",
		category: "逻辑推理",
	},
];

export const getDocumentById = (id: string): ResourceDocument | undefined => {
	return resourceDocuments.find((doc) => doc.id === id);
};

export const getDocumentsByType = (type: "pdf" | "docx") => {
	return resourceDocuments.filter((doc) => doc.type === type);
};

export const getDocumentsByCategory = (category: string) => {
	return resourceDocuments.filter((doc) => doc.category === category);
};

export const getAllCategories = () => {
	const categories = new Set<string>();
	resourceDocuments.forEach((doc) => {
		if (doc.category) {
			categories.add(doc.category);
		}
	});
	return Array.from(categories).sort();
};

export default resourceDocuments;

