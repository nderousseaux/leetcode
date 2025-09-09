--
-- @lc app=leetcode id=1141 lang=postgresql
--
-- [1141] User Activity for the Past 30 Days I
--

-- @lc code=start
-- Write your PostgreSQL query statement below
SELECT activity_date as day, COUNT(distinct user_id) active_users
FROM Activity
WHERE activity_date between '2019-06-28' and '2019-07-27'
GROUP BY activity_date
;
-- @lc code=end

