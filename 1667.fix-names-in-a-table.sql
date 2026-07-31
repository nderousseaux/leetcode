--
-- @lc app=leetcode id=1667 lang=posgresql
--
-- [1667] Fix Names in a Table
--

-- @lc code=start
-- Write your PostgreSQL query statement below
SELECT
    user_id,
    CONCAT(
        upper(substr(name, 1, 1)),
        lower(substr(name, 2, length(name)))
    ) as name
FROM
    Users
ORDER BY
    user_id
;

-- @lc code=end

