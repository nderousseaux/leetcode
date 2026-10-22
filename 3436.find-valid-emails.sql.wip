--
-- @lc app=leetcode id=3436 lang=postgresql
--
-- [3436] Find Valid Emails
--

-- @lc code=start
-- Write your PostgreSQL query statement below
SELECT *
FROM Users
WHERE REGEXP_LIKE(email, '^[a-zA-Z0-9_]+@[a-zA-Z]+\.com$')
ORDER BY user_id
;

-- @lc code=end
