--
-- @lc app=leetcode id=1633 lang=postgresql
--
-- [1633] Percentage of Users Attended a Contest
--

-- @lc code=start
-- Write your PostgreSQL query statement below
SELECT
    contest_id,
    ROUND(
        COUNT(user_id) * 100.0 / (SELECT COUNT(user_id) FROM Users)
    ,2) AS percentage
FROM
    Register
GROUP BY
    contest_id
ORDER BY
    percentage DESC,
    contest_id ASC
;

-- @lc code=end

