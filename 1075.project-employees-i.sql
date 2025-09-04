--
-- @lc app=leetcode id=1075 lang=postgresql
--
-- [1075] Project Employees I
--

-- @lc code=start
-- Write your PostgreSQL query statement below

SELECT p.project_id, ROUND(AVG(e.experience_years), 2) AS average_years
FROM Employee AS e
JOIN Project AS p ON p.employee_id = e.employee_id
GROUP BY p.project_id
; 

-- @lc code=end

