---
title: 毕设工作
published: 2026-02-03
pinned: false
description: 毕设相关工作
tags:
  - Markdown
  - Blogging
  - graduate-design
  - note
category: note
licenseName: Unlicensed
author: niangao5142
draft: false
date: 2026-02-03
pubDate: 2026-02-03
---
# Docker部署
创建docker网络：
```
sudo docker network create bms-network
```
前端：[Docker容器部署前端Vue服务——手把手教学_docker部署vue-CSDN博客](https://blog.csdn.net/xiaolong124/article/details/123458100)
****
# ？
1. 在注册报名管理的里面的比赛项目模块里
    - 创建项目之后
        - 编排管理系统里面应该也要有对应的一个项目被创建
            - 没有的字段都先用0来代替,已经有了一个用于新增Competition的端口了
            - 前端也对接了就在`arrangementRequest.ts`里面,调用一下就行了
2. 把之前的数据备份一下然后删掉，重新从报名端开始记录选手，搞四个账号，每个账号男女分别16个，教练2个。
    - 不要直接数据库导入，从前端录入，手动和excl表都测一下，有问题修正一下。

----
# ？
测试过程

- org001

  - 教练2个

    - 教练1（普通添加1个）

    - 批量1个

    - | 姓名  | 电话        | 身份证号           | 性别 | 组织号 | 联赛号  |
      | ----- | ----------- | ------------------ | ---- | ------ | ------- |
      | 教练2 | 33333333333 | 110101199001020029 | 1    | org001 | tnmt001 |

  - 选手16个

    - 林位杰（普通添加1个）

    - 批量添加15个

    - | 姓名   | 性别 | 出生日期  | 身份证号码         | 等级 | 学籍号 | 头像 | 组别号 | 组织号 | 联赛号 | 比赛项目（json） | 备注 |
      | ------ | ---- | --------- | ------------------ | ---- | ------ | ---- | ------ | ------ | ------ | ---------------- | ---- |
      | 黄俊宇 | 1    | 2006-1-1  | 110101199001020029 |      |        |      |        | org001 |        |                  |      |
      | 吴家亿 | 1    | 2006-1-2  | 110101199001030032 |      |        |      |        | org001 |        |                  |      |
      | 狄子皓 | 1    | 2006-1-3  | 110101199001040046 |      |        |      |        | org001 |        |                  |      |
      | 张雅琪 | 0    | 2006-1-4  | 11010119900105005X |      |        |      |        | org001 |        |                  |      |
      | 林悦涵 | 0    | 2006-1-5  | 110101199001060063 |      |        |      |        | org001 |        |                  |      |
      | 纪雅诺 | 0    | 2006-1-6  | 110101199001070077 |      |        |      |        | org001 |        |                  |      |
      | 吴禹帆 | 1    | 2006-1-7  | 110101199001080080 |      |        |      |        | org001 |        |                  |      |
      | 李俊熠 | 1    | 2006-1-8  | 110101199001090094 |      |        |      |        | org001 |        |                  |      |
      | 刘宇强 | 1    | 2006-1-9  | 110101199001100109 |      |        |      |        | org001 |        |                  |      |
      | 陈子僖 | 1    | 2006-1-10 | 110101199001110112 |      |        |      |        | org001 |        |                  |      |
      | 陈易阳 | 1    | 2006-1-11 | 110101199001120126 |      |        |      |        | org001 |        |                  |      |
      | 刘宇奇 | 1    | 2006-1-12 | 11010119900113013X |      |        |      |        | org001 |        |                  |      |
      | 林泰龙 | 1    | 2006-1-13 | 110101199001140143 |      |        |      |        | org001 |        |                  |      |
      | 郭昕宇 | 1    | 2006-1-14 | 110101199001150157 |      |        |      |        | org001 |        |                  |      |

- org002

- org003

----
# ？
```json
{
    "type": "地区联赛",
    "level": "B级",
    "contact": {
        "phone": "13800138000",
        "person": "张主任"
    },
    "schedule": {
        "knockout": "2023-07-11至2023-07-30",
        "groupStage": "2023-06-15至2023-07-10"
    },
    "divisions": [
        {
            "code": "U12",
            "name": "12岁以下组",
            "max_age": 12,
            "division_id": "div_u12_2023"
        },
        {
            "code": "U13",
            "name": "13岁以下组",
            "max_age": 13,
            "division_id": "div-03fd4f8e805edecc356a4b6c06cbb285"
        },
        {
            "code": "DIV1",
            "name": "男子组",
            "max_age": 30,
            "division_id": "div_u9_2023"
        }
    ],
    "organizer": "城市体育局",
    "schedules": {
        "div_u9_2023": [
            {
                "value": "测试",
                "event_name": "男单打",
                "max_players": 0,
                "group_number": "1",
                "display_order": 0,
                "event_short_name": "男单打",
                "is_cross_division": 0,
                "is_scheduling_allowed": 1
            }
        ],
        "div_u12_2023": [
            {
                "value": "mixed_doubles",
                "min_male": "1",
                "event_name": "12岁以下组混合双打",
                "min_female": "1",
                "max_players": "16",
                "group_number": "U12-2",
                "display_order": "3",
                "event_short_name": "混双",
                "is_cross_division": "1",
                "is_scheduling_allowed": "1"
            },
            {
                "value": "mens_singles",
                "min_male": 2,
                "event_name": "男子单打",
                "min_female": 2,
                "max_players": "40",
                "group_number": "U12-3",
                "display_order": "1",
                "event_short_name": "男单",
                "is_cross_division": "1",
                "is_scheduling_allowed": "1"
            },
            {
                "value": "womens_singles",
                "min_male": null,
                "event_name": "女子单打",
                "min_female": null,
                "max_players": "24",
                "group_number": "U13-1",
                "display_order": "2",
                "event_short_name": "女单",
                "is_cross_division": "1",
                "is_scheduling_allowed": "0"
            }
        ],
        "div-03fd4f8e805edecc356a4b6c06cbb285": [
            {
                "value": "mixed_doubles",
                "min_male": null,
                "event_name": "混合双打",
                "min_female": null,
                "max_players": "12",
                "group_number": "U13-2",
                "display_order": "3",
                "event_short_name": "混双",
                "is_cross_division": "1",
                "is_scheduling_allowed": "1"
            },
            {
                "value": "womens_doubles",
                "min_male": "3",
                "event_name": "女子双打",
                "min_female": "3",
                "max_players": "25",
                "group_number": "U12-1",
                "display_order": "3",
                "event_short_name": "女双打",
                "is_cross_division": "1",
                "is_scheduling_allowed": "1"
            },
            {
                "value": "team_event",
                "min_male": "4",
                "event_name": "团体赛",
                "min_female": "4",
                "max_players": "10",
                "group_number": "U13-3",
                "display_order": "4",
                "event_short_name": "团体",
                "is_cross_division": "0",
                "is_scheduling_allowed": "0"
            },
            {
                "value": "mens_doubles",
                "min_male": "4",
                "event_name": "男子双打",
                "min_female": null,
                "max_players": "20",
                "group_number": "1",
                "display_order": "3",
                "event_short_name": "男双",
                "is_cross_division": "0",
                "is_scheduling_allowed": "1"
            }
        ]
    },
    "requirements": [
        "本地户籍证明",
        "业余选手资格"
    ]
}
```

```xml
UPDATE tournaments
    SET remark = JSON_SET(
        IFNULL(remark, JSON_OBJECT())
        <!-- 只在 divisions 不为空时追加 -->
        <if test="divisions != null">
            ,
            '$.divisions',
            CASE
                <!-- 如果 divisions 字段不存在或为空，直接创建数组 -->
                WHEN JSON_EXTRACT(IFNULL(remark, '{}'), '$.divisions') IS NULL OR
                     JSON_LENGTH(JSON_EXTRACT(IFNULL(remark, '{}'), '$.divisions')) = 0 THEN
                    JSON_ARRAY(
                        JSON_OBJECT(
                            'code', #{divisions.code},
                            'name', #{divisions.name},
                            'max_age', #{divisions.max_age},
                            'division_id', #{divisions.division_id}
                        )
                    )
                <!-- 检查是否已存在相同的 division_id -->
                WHEN JSON_CONTAINS(
                    JSON_EXTRACT(IFNULL(remark, '{}'), '$.divisions[*].division_id'),
                    JSON_QUOTE(#{divisions.division_id})
                ) = 1 THEN
                    <!-- 如果已存在，不添加，保持原样 -->
                    JSON_EXTRACT(IFNULL(remark, '{}'), '$.divisions')
                ELSE
                    <!-- 如果不存在，追加到数组末尾 -->
                    JSON_ARRAY_APPEND(
                        JSON_EXTRACT(IFNULL(remark, '{}'), '$.divisions'),
                        '$',
                        JSON_OBJECT(
                            'code', #{divisions.code},
                            'name', #{divisions.name},
                            'max_age', #{divisions.max_age},
                            'division_id', #{divisions.division_id}
                        )
                    )
            END
        </if>
        <!-- 只在 schedules 不为空时追加 -->
        <if test="schedules != null and schedules.size() > 0">
            ,
            '$.schedules',
            CASE
                <!-- 如果 schedules 字段不存在或为空，直接创建对象 -->
                WHEN JSON_EXTRACT(IFNULL(remark, '{}'), '$.schedules') IS NULL OR
                     JSON_LENGTH(JSON_EXTRACT(IFNULL(remark, '{}'), '$.schedules')) = 0 THEN
                    JSON_OBJECT(
                        <foreach collection="schedules.keySet()" item="key">
                            '${key}', JSON_ARRAY(
                                JSON_OBJECT(
                                    'value', #{schedules[${key}].value},
                                    'event_name', #{schedules[${key}].event_name},
                                    'max_players', #{schedules[${key}].max_players},
                                    'group_number', #{schedules[${key}].group_number},
                                    'display_order', #{schedules[${key}].display_order},
                                    'event_short_name', #{schedules[${key}].event_short_name},
                                    'is_cross_division', #{schedules[${key}].is_cross_division},
                                    'is_scheduling_allowed', #{schedules[${key}].is_scheduling_allowed}
                                )
                            )
                        </foreach>
                    )
                ELSE
                    <!-- 如果已存在，合并 schedules -->
                    JSON_MERGE_PATCH(
                        JSON_EXTRACT(IFNULL(remark, '{}'), '$.schedules'),
                        JSON_OBJECT(
                            <foreach collection="schedules.keySet()" item="key">
                                '${key}',
                                CASE
                                    <!-- 如果该分组不存在，创建新数组 -->
                                    WHEN JSON_EXTRACT(IFNULL(remark, '{}'), CONCAT('$.schedules."', '${key}', '"')) IS NULL THEN
                                        JSON_ARRAY(
                                            JSON_OBJECT(
                                                'value', #{schedules[${key}].value},
                                                'event_name', #{schedules[${key}].event_name},
                                                'max_players', #{schedules[${key}].max_players},
                                                'group_number', #{schedules[${key}].group_number},
                                                'display_order', #{schedules[${key}].display_order},
                                                'event_short_name', #{schedules[${key}].event_short_name},
                                                'is_cross_division', #{schedules[${key}].is_cross_division},
                                                'is_scheduling_allowed', #{schedules[${key}].is_scheduling_allowed}
                                            )
                                        )
                                    <!-- 检查该分组中是否已存在相同 value 的事件 -->
                                    WHEN JSON_CONTAINS(
                                        JSON_EXTRACT(IFNULL(remark, '{}'), CONCAT('$.schedules."', '${key}', '"[*].value')),
                                        JSON_QUOTE(#{schedules[${key}].value})
                                    ) = 1 THEN
                                        <!-- 如果已存在，不添加，保持原样 -->
                                        JSON_EXTRACT(IFNULL(remark, '{}'), CONCAT('$.schedules."', '${key}', '"'))
                                    ELSE
                                        <!-- 如果不存在，追加到数组末尾 -->
                                        JSON_ARRAY_APPEND(
                                            JSON_EXTRACT(IFNULL(remark, '{}'), CONCAT('$.schedules."', '${key}', '"')),
                                            '$',
                                            JSON_OBJECT(
                                                'value', #{schedules[${key}].value},
                                                'event_name', #{schedules[${key}].event_name},
                                                'max_players', #{schedules[${key}].max_players},
                                                'group_number', #{schedules[${key}].group_number},
                                                'display_order', #{schedules[${key}].display_order},
                                                'event_short_name', #{schedules[${key}].event_short_name},
                                                'is_cross_division', #{schedules[${key}].is_cross_division},
                                                'is_scheduling_allowed', #{schedules[${key}].is_scheduling_allowed}
                                            )
                                        )
                                END
                            </foreach>
                        )
                    )
            END
        </if>
    )
    WHERE tournament_id = #{tournamentId}
```





****

# 251229

## 选择机构页面选择test

####  维护排赛
- 选择组别13岁以上组别只出现了一个比赛✔
  - 应该有4个
- 完整赛程表，同一个比赛可以多次出现再不同的地方✔
  - 比赛安排要有唯一性
- 把端口listAllDivision换成✔
  - http://localhost:8089/divisions/getDivisionGroupName
  - 把listAllDivision这个端口删掉(if not be used)

#### 改表
- referees表里面增加一个is_deleted
  - 记得修改一下涉及到的端口



```
matchesGeneralVOList: [
	MatchesGeneralVO(matchId=29bec50d-65f9-4790-8126-9be4bc7e1843, matchName=13岁以上组别-mens_singles, groupId=div-03fd4f8e805edecc356a4b6c06cbb285, groupName=13岁以上组别, matchCategory=mens_singles, matchCode=null, venue=, matchTimeId=null, tournamentId=209da9dab646f182039d525d60ca428d, matchScheduleName=循环赛_4_1_1, groupNumber=4, isKnockoutStage=0, round=1, orderInRound=1, sideOnePlayerOneName=拉尔, sideOnePlayerTwoName=null, sideTwoPlayerOneName=困困, sideTwoPlayerTwoName=null), 
	MatchesGeneralVO(matchId=55695ab6-7491-47bb-9bdd-adc5fcf12759, matchName=13岁以上组别-mens_singles, groupId=div-03fd4f8e805edecc356a4b6c06cbb285, groupName=13岁以上组别, matchCategory=mens_singles, matchCode=null, venue=, matchTimeId=null, tournamentId=209da9dab646f182039d525d60ca428d, matchScheduleName=循环赛_1_1_1, groupNumber=1, isKnockoutStage=0, round=1, orderInRound=1, sideOnePlayerOneName=嘎嘎, sideOnePlayerTwoName=null, sideTwoPlayerOneName=茂凯, sideTwoPlayerTwoName=null), 
	MatchesGeneralVO(matchId=8ec77e43-b316-4a35-ad04-6d926136418e, matchName=13岁以上组别-mens_singles, groupId=div-03fd4f8e805edecc356a4b6c06cbb285, groupName=13岁以上组别, matchCategory=mens_singles, matchCode=null, venue=, matchTimeId=null, tournamentId=209da9dab646f182039d525d60ca428d, matchScheduleName=循环赛_2_1_1, groupNumber=2, isKnockoutStage=0, round=1, orderInRound=1, sideOnePlayerOneName=阿信, sideOnePlayerTwoName=null, sideTwoPlayerOneName=威威, sideTwoPlayerTwoName=null),
    MatchesGeneralVO(matchId=b2a3052a-a0cf-4e7e-b5c0-cbc9f74ea8dd, matchName=13岁以上组别-mens_singles, groupId=div-03fd4f8e805edecc356a4b6c06cbb285, groupName=13岁以上组别, matchCategory=mens_singles, matchCode=null, venue=, matchTimeId=null, tournamentId=209da9dab646f182039d525d60ca428d, matchScheduleName=循环赛_3_1_1, groupNumber=3, isKnockoutStage=0, round=1, orderInRound=1, sideOnePlayerOneName=香克斯, sideOnePlayerTwoName=null, sideTwoPlayerOneName=黄骅, sideTwoPlayerTwoName=null)
    ]

```



****
# ？
## ScoreTimerClient
*计分页面不能够适应各种屏幕大小，改一下*

- 选择困困vs拉尔那场
- 可以反复测试
*比赛计分完成，可以用这个SQL重置比分*
```sql
delete from match_score where match_id = "f44764f7-5cca-410d-b3b4-b7f59f9da3b1";
```



****
# ？
- 执裁裁判页面实现一下分页功能。
  - **全部比赛** and **选择比赛** 都要实现分页功能

- 维护排赛的左边的数据获取有问题，已经安排的比赛，不需要选择组别直接就可以展示
  - 现在我通过标签切换一下页面，左边的数据就会消失，应该要再次获取.
  
- 现在BadmintonAdminFont文件,/main/players
  - 下载模板没有下载，修正一下.

****
# ？
- 实现一下，arrangeTeamPlayersWithGroupByPlayersWithGroupDTO，用team_match_signups代替participants
  - 它和单打的那个分组逻辑一样arrangePlayersWithGroupByPlayersWithGroupDTO)
  - 可以查一下，羽毛球分组的方法
  - 前端使用在团体分组编排->抽签分组的位置(answer = await toArrangeTeamPlayers(dto))

- 缺少创建组别的功能(http://localhost:81/main/match/categories)

- 现在查看分组不能够在组之间换人改一下(http://localhost:81/main/match/view-groups).
  - 就是比如A组的人，不能换到B组
  - 先保存一下现在的数据，你测试成功之后把数据恢复回来
- team_match_signups这个表里面已经有几个数据了，你可以加几个测试用，最后把测试的删掉就可以了。

****
# 260129
## 要求
**完成一下GenerateTeamMatchPromotePlayers这个方法(PullPromotion.java)**（生成晋级队伍）
**再实现对应的获取这个数据的端口**

实现一下，看看上面的单打和那个逻辑差不多
规则就在之前发你的规则书里面
团体赛获取SQL:

```sql
select
    master_match_schedule_id,
    organization_id,
    win_count
from (
    select
        tm.master_match_schedule_id,
        p.organization_id,
        count(*) as win_count,
        row_number() over (
        	partition by tm.master_match_schedule_id
        	order by count(*) desc
        ) as rn
    from team_event_matches tm
    join match_schedule ms on ms.match_schedule_id = tm.match_schedule_id
    join matches m on ms.match_id = m.match_id
    join teams t on t.team_id = m.winner_id
    join participants p on p.participant_id = t.participant_one_id
    where ms.division_id = 'div-03fd4f8e805edecc356a4b6c06cbb285'
    and ms.tournament_id = '257de693732eb1bdb4ab69aaada3a6e2'
    and tm.team_event_code = 'TEAM-CC24129B'
    group by
    tm.master_match_schedule_id,
    p.organization_id
) t
where rn = 1
order by master_match_schedule_id;
```
## 相关的表
```bash
(MySQL):badminton_matches_scoring>desc team_event_matches;
+--------------------------+--------------+------+-----+-------------------+-----------------------------------------------+
| Field                    | Type         | Null | Key | Default           | Extra                                         |
+--------------------------+--------------+------+-----+-------------------+-----------------------------------------------+
| team_event_id            | varchar(255) | NO   | PRI | <null>            |                                               |
| group_id                 | varchar(255) | NO   |     | <null>            |                                               |
| organization_id          | varchar(255) | NO   |     | <null>            |                                               |
| team_score               | int          | NO   |     | <null>            |                                               |
| is_winner                | tinyint      | NO   |     | <null>            |                                               |
| team_event_code          | varchar(32)  | YES  |     | <null>            |                                               |
| master_match_schedule_id | varchar(48)  | YES  |     | <null>            |                                               |
| match_schedule_id        | varchar(48)  | YES  |     | <null>            |                                               |
| create_time              | datetime     | NO   |     | CURRENT_TIMESTAMP | DEFAULT_GENERATED                             |
| update_time              | datetime     | NO   |     | CURRENT_TIMESTAMP | DEFAULT_GENERATED on update CURRENT_TIMESTAMP |
+--------------------------+--------------+------+-----+-------------------+-----------------------------------------------+

10 rows in set
Time: 0.102s
mysql@110.40.192.228
(MySQL):badminton_matches_scoring>
```
- 在match_schedule表里面关于`团体比赛`
  - 有两种记录一种是side_one_player_one_id ,side_two_player_one_id都是记录organization_id
    - 是用来查看组织之间的比赛安排情况的 
  - 另一种是正常的记录比赛的和单项一样
  - 这两种记录由team_event_matches tm表记录
    - tm.master_match_schedule_id 是记录第一种的match_id的，tm.match_schedule_id是记录团体比赛内具体的各项比赛的
  - 查找比赛的时候利用team_event_code来查询第一种的match_schedule记录，也可以利用team_event_matches查询出第二种的match_schedule
## 修改
修改后的sql
```sql
select
    master_match_schedule_id,
    organization_id,
    team_match_signups_id,
    win_count
from (
    select
        tm.master_match_schedule_id,
        tm.team_match_signups_id,
        p.organization_id,
        count(*) as win_count,
        row_number() over (
        	partition by tm.master_match_schedule_id
        	order by count(*) desc
        ) as rn
    from team_event_matches tm
    join team_match_signups tms on tms.team_match_signups_id = tm.team_match_signups_id
    join match_schedule ms on ms.match_schedule_id = tm.match_schedule_id
    join matches m on ms.match_id = m.match_id
    join teams t on t.team_id = m.winner_id
    join participants p on p.participant_id = t.participant_one_id
    where ms.division_id = 'div-03fd4f8e805edecc356a4b6c06cbb285'
    and ms.tournament_id = '257de693732eb1bdb4ab69aaada3a6e2'
    and tm.team_event_code = 'TEAM-CC24129B'
    group by
    tm.master_match_schedule_id,
    tm.team_match_signups_id, 
    p.organization_id
) t
where rn = 1
order by master_match_schedule_id;
```
- 在match_schedule表里面关于`团体比赛`
  - 有两种记录一种是side_one_player_one_id ,side_
  - two_player_one_id都是记录==team_match_signups_id==
    - 是用来查看==组织之下的队伍==之间的比赛安排情况的 
  - 另一种是正常的记录比赛的和单项一样，matches_schedule表中的team_event_code表示该记录属于团体赛
  - 这两种记录由team_event_matches tm表记录
    - tm.master_match_schedule_id 是记录第一种的match_id的，tm.match_schedule_id是记录团体比赛内具体的各项比赛的
	  - 查找比赛的时候利用team_event_code来查询第一种的match_schedule记录，也可以利用team_event_matches查询出第二种的match_schedule
## **实现记录**
思路：晋级队伍 -> 各队伍胜场次
- 260203 2023年羽毛球赛竞赛规则 p101
- 260204 一个组织不只对应一个队伍，用teamcode做限制，修改以上sql
- 260206 对数据库进行修改，解决一个组织不只对应一个队伍的问题
	- 修改team_event_matches表，添加team_match_signups_id字段，作为外键链接team_match_signups表
	- 修改team_match_signups表，将主键team_match_signups_id字段类型由bigint改为varchar
	- 修改matches_schedule表的side_one_player_one_id、side_one_player_two_id字段内容，将第一种情况改成记为team_match_signups_id
	- 修改team表，添加team_match_signups_id与organization_id字段，分别与team_match_signups、organization表关联
- 260210 team_event_matches中的organization_id和team_match_signups_id是不是没用？不行，teams生成要根据这个表来生成的。
	- 删除team_event_matches中的organization_id和team_match_signups_id？不行
- 260211 round_robin_participants表中有关团队赛事分组记录的participant_id_one应该改成存team_match_signups_id
- 260212 （胜场数 -> 胜次 -> 净胜局【-> 胜次】-> 净胜分数【-> 胜次】【-> 抽签】）从DB查找tms1的对阵结果（胜次）
- 260213 match_schedule表中添加team_one_id与team_two_id字段，表示该局赛事由这两个小队进行对阵
- 260217 问题：团队赛中，team表生成记录不完全

## 草稿
```sql
select
    master_match_schedule_id,
    organization_id,
    team_match_signups_id,
    win_count
from (
    select
        tm.master_match_schedule_id,
        tm.team_match_signups_id,
        p.organization_id,
        count(*) as win_count,
        row_number() over (
        	partition by tm.master_match_schedule_id
        	order by count(*) desc
        ) as rn
    from team_event_matches tm
    join team_match_signups tms on tms.team_match_signups_id = tm.team_match_signups_id
    join match_schedule ms on ms.match_schedule_id = tm.match_schedule_id
    join matches m on ms.match_id = m.match_id
    join teams t on t.team_id = m.winner_id
    join participants p on p.participant_id = t.participant_one_id
    where ms.division_id = 'div-03fd4f8e805edecc356a4b6c06cbb285'
    and ms.tournament_id = '257de693732eb1bdb4ab69aaada3a6e2'
    and tm.team_event_code = 'TEAM-CC24129B'
    group by
    tm.master_match_schedule_id,
    tm.team_match_signups_id, 
    p.organization_id
) t
where rn = 1
order by master_match_schedule_id;



-- 查找team_even_matches中记录多少个不同的master_match_schedule_id
SELECT DISTINCT team_match_signups_id,master_match_schedule_id FROM team_event_matches

-- 查询小组赛中各选手获胜场次
SELECT m.winner_id AS player_id,
               COUNT(*)    AS win_count
        FROM match_schedule r
                 JOIN matches m ON r.match_id = m.match_id
        WHERE r.tournament_id = "257de693732eb1bdb4ab69aaada3a6e2"
          AND r.division_id = "div-03fd4f8e805edecc356a4b6c06cbb285"
          AND r.event_type = "mens_singles"
          AND r.group_number = 1
          AND m.winner_id IS NOT NULL
        GROUP BY m.winner_id
        

-- 第一种情况：找出match_schedule中表示两个队伍的记录
SELECT 
  tem.master_match_schedule_id,
  ms.side_one_player_one_id,
  ms.side_two_player_one_id,
  ms.division_id,
  ms.event_type,
  ms.team_event_code,
  ms.match_id,
  ms.group_number
FROM
  team_event_matches tem
  JOIN match_schedule ms ON tem.master_match_schedule_id = ms.match_schedule_id
-- 第二种情况：找出match_schedule中表示每个队伍内部的比赛（胜场数）
SELECT
--   tem.team_match_signups_id,
--   ms.match_id,
--   m.winner_id AS win_tiny_team_id,-- 此处的team指代对阵时的一方
  t.team_match_signups_id,
  COUNT(t.team_match_signups_id) AS win_count
FROM
  team_event_matches tem
  JOIN team_match_signups tms ON tem.team_match_signups_id = tms.team_match_signups_id
  JOIN match_schedule ms ON tem.match_schedule_id = ms.match_schedule_id
  JOIN matches m ON ms.match_id = m.match_id
  JOIN teams t ON m.winner_id = t.team_id
  JOIN round_robin_participants rrp ON tem.team_match_signups_id = rrp.participant_id_one
  WHERE tem.team_event_code = "TEAM-CC24129B"
    AND ms.division_id = "div-03fd4f8e805edecc356a4b6c06cbb285"
    AND ms.tournament_id = "257de693732eb1bdb4ab69aaada3a6e2"
    AND rrp.group_number = 1
  GROUP BY t.team_match_signups_id
  
-- ------------------------------规则 1.3.2 两人胜场相同 → 看交手-------------------------------------------------------------------------------------------------------------
-- 查询选手对阵结果
SELECT 
  CASE 
    WHEN t.participant_one_id = "p002_m07"
      OR t.participant_two_id = "p002_m07"
    THEN 'WIN'
    ELSE 'LOSE'
  END AS result
FROM matches m
JOIN teams t ON m.winner_id = t.team_id
WHERE m.match_id = "5846ad7d-9df2-4e5a-b12d-e1965570992d"
AND (t.participant_one_id = "p002_m07" OR t.participant_two_id = "p003_m01")

-- 查询tms队伍对阵结果（补全team_event_matches表is_winner字段）（胜次：即team_event_matches表中master_match_schedule字段记录的比赛胜利次数）
SELECT
  tem.team_match_signups_id,
  ms.match_schedule_id,
  ms.match_id,
  ms.match_schedule_name,
--   ms.division_id,
  t1.team_match_signups_id AS team_match_signups_one,
  t2.team_match_signups_id AS team_match_signups_two,
  CASE WHEN t.team_match_signups_id = tem.team_match_signups_id
    THEN 1
    ELSE 0
  END AS result
FROM
  team_event_matches tem
  JOIN match_schedule ms ON tem.match_schedule_id = ms.match_schedule_id
  JOIN matches m ON ms.match_id = m.match_id
  JOIN teams t ON m.winner_id = t.team_id
  JOIN teams t1 ON ms.team_one_id = t1.team_id
  JOIN teams t2 ON ms.team_two_id = t2.team_id
WHERE tem.team_event_code = "TEAM-CC24129B"
  AND ms.division_id = "div-03fd4f8e805edecc356a4b6c06cbb285"
--   AND ms.event_type = "mens_singles"
  AND t.is_team_event = 1
  
SELECT 
  tem.team_event_id,
  t.team_id
FROM team_event_matches tem
  JOIN match_schedule ms ON tem.match_schedule_id = ms.match_schedule_id
  JOIN teams t ON ms.match_id = t.match_id
  
SELECT 
    tem.team_event_id,
    tem.team_match_signups_id,
    t1.team_id AS team_one_id,
    t1.team_match_signups_id AS team_one_signups_id,
    t2.team_id AS team_two_id,
    t2.team_match_signups_id AS team_two_signups_id,
    ms.match_schedule_name
FROM team_event_matches tem
JOIN match_schedule ms 
    ON tem.match_schedule_id = ms.match_schedule_id
JOIN teams t1 
    ON ms.match_id = t1.match_id 
    AND t1.is_team_event = 1
JOIN teams t2 
    ON ms.match_id = t2.match_id 
    AND t2.is_team_event = 1
    AND t1.team_id < t2.team_id
WHERE tem.team_event_code = 'TEAM-CC24129B';

-- 变式，查询两个team_match_signups队伍之间的比赛，判断这两个tms队伍在胜场数相同情况下的名次先后
SELECT
  tem.team_match_signups_id,
  ms.match_schedule_name,
  t1.team_match_signups_id AS team_match_signups_one,
  t2.team_match_signups_id AS team_match_signups_two,
  CASE WHEN t.team_match_signups_id = tem.team_match_signups_id
    THEN 1
    ELSE 0
  END AS result
FROM team_event_matches tem
  JOIN match_schedule ms ON tem.match_schedule_id = ms.match_schedule_id
  JOIN matches m ON ms.match_id = m.match_id
  JOIN teams t ON m.winner_id = t.team_id
  JOIN teams t1 ON ms.team_one_id = t1.team_id
  JOIN teams t2 ON ms.team_two_id = t2.team_id
WHERE tem.team_event_code = "TEAM-CC24129B"
  AND ms.division_id = "div-03fd4f8e805edecc356a4b6c06cbb285"
--   AND ms.event_type = "mens_singles"
  AND t.is_team_event = 1
  AND (
    (t1.team_match_signups_id = '3' AND t2.team_match_signups_id = '1')
    OR
    (t1.team_match_signups_id = '1' AND t2.team_match_signups_id = '3')
  );
  
  -- 再变式，贴合项目
  SELECT
  tem.team_match_signups_id,
--   ms.match_schedule_name,
--   t1.team_match_signups_id AS team_match_signups_one,
--   t2.team_match_signups_id AS team_match_signups_two,
  CASE WHEN t.team_match_signups_id = tem.team_match_signups_id
    THEN "WIN"
    ELSE "LOSE"
  END AS result
FROM team_event_matches tem
  JOIN match_schedule ms ON tem.match_schedule_id = ms.match_schedule_id
  JOIN matches m ON ms.match_id = m.match_id
  JOIN teams t ON m.winner_id = t.team_id
  JOIN teams t1 ON ms.team_one_id = t1.team_id
  JOIN teams t2 ON ms.team_two_id = t2.team_id
WHERE tem.team_event_code = "TEAM-CC24129B"
  AND ms.division_id = "div-03fd4f8e805edecc356a4b6c06cbb285"
--   AND ms.event_type = "mens_singles"
  AND t.is_team_event = 1
  AND (
    (t1.team_match_signups_id = '2' AND t2.team_match_signups_id = '1')
    OR
    (t1.team_match_signups_id = '1' AND t2.team_match_signups_id = '2')
  );
  
-- ------------------------------≥3队tms：规则 1.3.3 看净胜局数-------------------------------------------------------------------------------------------------------------
-- 单项赛
SELECT 
    t.participant_one_id AS participant_id,
    SUM(CASE WHEN m.winner_id = t.team_id THEN 1 ELSE 0 END) AS win_count,
    SUM(CASE WHEN m.winner_id != t.team_id THEN 1 ELSE 0 END) AS lose_count,
    SUM(CASE WHEN m.winner_id = t.team_id THEN 1 ELSE -1 END) AS net_games
FROM teams t
  JOIN matches m ON t.match_id = m.match_id
WHERE t.participant_one_id = "p003_m01"
GROUP BY t.participant_one_id
-- 团体赛 定义：该队(tms)在所有单项比赛中，赢的局数总和，减去，输的局数总和
SELECT 
  tem.team_match_signups_id,
  SUM(CASE WHEN m.winner_id = t.team_id THEN 1 ELSE 0 END) AS win_count,
  SUM(CASE WHEN m.winner_id != t.team_id THEN 1 ELSE 0 END) AS lose_count,
  SUM(CASE WHEN m.winner_id = t.team_id THEN 1 ELSE -1 END) AS net_games
FROM team_event_matches tem
 JOIN match_schedule ms ON tem.match_schedule_id = ms.match_schedule_id
 JOIN matches m ON ms.match_id = m.match_id
 JOIN teams t ON m.match_id = t.match_id
WHERE tem.team_match_signups_id = '1'
GROUP BY tem.team_match_signups_id
-- AI修改过的
SELECT 
   tem.team_match_signups_id, 
   SUM(CASE WHEN t.team_match_signups_id = tem.team_match_signups_id THEN 1 ELSE 0 END) AS win_count, 
   SUM(CASE WHEN t.team_match_signups_id != tem.team_match_signups_id OR t.team_match_signups_id IS NULL THEN 1 ELSE 0 END) AS lose_count
FROM team_event_matches tem 
 JOIN match_schedule ms ON tem.match_schedule_id = ms.match_schedule_id 
 JOIN matches m ON ms.match_id = m.match_id 
 LEFT JOIN teams t ON m.winner_id = t.team_id 
WHERE tem.team_event_code = 'TEAM-CC24129B'
  AND tem.team_match_signups_id = '1'
GROUP BY tem.team_match_signups_id

  -- 每个tms输掉的比赛数
SELECT 
  tem.team_match_signups_id,
  COUNT(*) AS lose_count
FROM team_event_matches tem
JOIN match_schedule ms ON tem.match_schedule_id = ms.match_schedule_id
JOIN matches m ON ms.match_id = m.match_id
JOIN teams t ON m.winner_id = t.team_id
WHERE t.team_match_signups_id != tem.team_match_signups_id
GROUP BY tem.team_match_signups_id;


-- ----------------------------------------------------------AI------------------------------------------------------------------

SELECT * FROM teams WHERE is_team_event = 1
SELECT * FROM match_schedule WHERE team_event_code IS NOT NULL


SELECT 
    TABLE_SCHEMA AS 数据库名,
    TABLE_NAME AS 表名,
    COLUMN_NAME AS 字段名,
    DATA_TYPE AS 数据类型
FROM INFORMATION_SCHEMA.COLUMNS
WHERE COLUMN_NAME = 'password'        -- 替换为你的字段名
  AND TABLE_SCHEMA = 'badminton_matches_scoring';    -- 替换为你的数据库名（可选）



CREATE TABLE `auth_user` (
    `user_id` varchar(36) NOT NULL,
    `user_name` varchar(100) NOT NULL COMMENT '用户名',
    `password` varchar(100) NOT NULL COMMENT '密码，加密',
    `role_id` int(11) DEFAULT NULL COMMENT '角色ID',
    `account_locked` tinyint(1) DEFAULT '0' COMMENT '账户是否锁定：1-是，0-否',
    `is_enabled` tinyint(1) DEFAULT '1' COMMENT '是否启用：1-是，0-否',
    `create_time` datetime DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
    `update_time` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
    PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='用户表';

CREATE TABLE `auth_role` (
    `role_id` varchar(36) NOT NULL,
    `user_name` varchar(100) NOT NULL COMMENT '用户名',
    `password` varchar(100) NOT NULL COMMENT '密码，加密',
    `role_id` int(11) DEFAULT NULL COMMENT '角色ID',
    `account_locked` tinyint(1) DEFAULT '0' COMMENT '账户是否锁定：1-是，0-否',
    `is_enabled` tinyint(1) DEFAULT '1' COMMENT '是否启用：1-是，0-否',
    `create_time` datetime DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
    `update_time` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
    PRIMARY KEY (`role_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='用户表';













```
****
# 20260210
- 执裁裁判的设置加一个查看所有的未设置裁判的比赛,在选择比赛的弹窗里面加一个选项，后端代码也修改一下。

****
# 20260219
- 实现一下权限登陆功能，必须登陆之后才可以使用
  - 测试一下成功之后就先放行所有的端口(方便开发)
  - TournamentAdminFont里面缺少登陆功能实现一下(用这个表permissions)
    - 前端的登陆页面也实现一下，然后做一下路由限制(不能没有登陆的时候页面不能直接查看)

****
# 20260226
- 报名端
    - 现在报名过的队员应该还是可以在添加运动员的弹窗里面出现
    - 现在领队的那个填写不了，改一下