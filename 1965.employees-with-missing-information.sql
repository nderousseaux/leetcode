--
-- @lc app=leetcode id=1965 lang=postgresql
--
-- [1965] Employees With Missing Information
--

-- @lc code=start
-- Write your PostgreSQL query statement below
SELECT
    COALESCE(e.employee_id, s.employee_id) AS employee_id
FROM
    Employees e 
FULL JOIN 
    Salaries s
    ON e.employee_id = s.employee_id
WHERE 
    e.name IS NULL OR
    s.salary IS NULL
ORDER BY
    employee_id
;

-- @lc code=end

