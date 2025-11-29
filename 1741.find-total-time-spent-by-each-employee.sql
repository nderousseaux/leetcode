--
-- @lc app=leetcode id=1741 lang=postgresql
--
-- [1741] Find Total Time Spent by Each Employee
--

-- @lc code=start
-- Write your PostgreSQL query statement below
SELECT
    event_day AS day,
    emp_id,
    SUM(out_time) - SUM(in_time) AS total_time
FROM
    Employees
GROUP BY
    event_day,
    emp_id
ORDER BY
    emp_id,
    day
;
-- @lc code=end

