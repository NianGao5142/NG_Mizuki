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

1. 在注册报名管理的里面的比赛项目模块里
    - 创建项目之后
        - 编排管理系统里面应该也要有对应的一个项目被创建
            - 没有的字段都先用0来代替,已经有了一个用于新增Competition的端口了
            - 前端也对接了就在`arrangementRequest.ts`里面,调用一下就行了
2. 把之前的数据备份一下然后删掉，重新从报名端开始记录选手，搞四个账号，每个账号男女分别16个，教练2个。
    - 不要直接数据库导入，从前端录入，手动和excl表都测一下，有问题修正一下。

----

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

## ScoreTimerClient
*计分页面不能够适应各种屏幕大小，改一下*

- 选择困困vs拉尔那场
- 可以反复测试
*比赛计分完成，可以用这个SQL重置比分*
```sql
delete from match_score where match_id = "f44764f7-5cca-410d-b3b4-b7f59f9da3b1";
```



****

- 执裁裁判页面实现一下分页功能。
  - **全部比赛** and **选择比赛** 都要实现分页功能

- 维护排赛的左边的数据获取有问题，已经安排的比赛，不需要选择组别直接就可以展示
  - 现在我通过标签切换一下页面，左边的数据就会消失，应该要再次获取.
  
- 现在BadmintonAdminFont文件,/main/players
  - 下载模板没有下载，修正一下.

****

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
#### 相关的表
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
### **本次实现记录**

2023年羽毛球赛竞赛规则 p101
