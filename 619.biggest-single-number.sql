--
-- @lc app=leetcode id=619 lang=postgresql
--
-- [619] Biggest Single Number
--

-- @lc code=start
-- Write your PostgreSQL query statement below
SELECT max(num) as num
FROM (
    SELECT num
    FROM MyNumbers
    GROUP BY num
    HAVING COUNT(*) = 1
)
;

-- @lc code=end

