--
-- @lc app=leetcode id=1789 lang=postgresql
--
-- [1789] Primary Department for Each Employee
--

-- @lc code=start
-- Write your PostgreSQL query statement below
SELECT 
    employee_id,
    department_id
FROM 
    employee
WHERE 
    employee_id IN (
        SELECT employee_id
        FROM Employee e1
        GROUP BY employee_id
        HAVING COUNT(employee_id) = 1
    ) OR 
    primary_flag = 'Y'
;

-- @lc code=end

