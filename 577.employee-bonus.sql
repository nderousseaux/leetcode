--
-- @lc app=leetcode id=577 lang=postgresql
--
-- [577] Employee Bonus
--

-- @lc code=start
-- Write your PostgreSQL query statement below
SELECT e.name, b.bonus
FROM Employee as e
LEFT JOIN Bonus as b ON e.empId = b.empId
WHERE b.bonus < 1000
OR Bonus IS NULL
;


-- @lc code=end

