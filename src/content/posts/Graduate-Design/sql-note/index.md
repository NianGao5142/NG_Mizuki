---
title: 毕设相关SQL笔记
published: 2025-02-03
pinned: false
description: 毕设SQL
tags:
  - Markdown
  - Blogging
  - SQL
  - File
category: file-note
author: niangao5142
draft: false
date: 2025-02-03
pubDate: 2025-02-03
---
## 窗口函数
### row_number()
用于为查询结果集中的每一行分配一个唯一的顺序号。它常用于数据分页、分组排序等场景。以下是生成晋级队伍功能的例子：
```
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
使用了`row_number`窗口函数来给每个`master_match_schedule_id`单独分组（即“窗口”），在窗口内按照胜场从高到低排序，并为窗口内的行分配唯一序号（1，2，3），即使胜场相同，也会强制区分先后