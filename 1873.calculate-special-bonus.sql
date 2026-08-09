--
-- @lc app=leetcode id=1873 lang=postgresql
--
-- [1873] Calculate Special Bonus
--

-- @lc code=start
-- Write your PostgreSQL query statement below
SELECT
    employee_id,
    CASE 
        WHEN LEFT(name, 1) != 'M' AND employee_id % 2 = 1 THEN
            salary
        ELSE 0
    END AS bonus
FROM
    Employees
ORDER BY 
    employee_id
;

-- @lc code=end

