--
-- @lc app=leetcode id=1731 lang=postgresql
--
-- [1731] The Number of Employees Which Report to Each Employee
--

-- @lc code=start
-- Write your PostgreSQL query statement below
SELECT
    e1.reports_to AS employee_id,
    (
        SELECT name
        FROM Employees e2 
        WHERE e2.employee_id = e1.reports_to
    ),
    COUNT(*) AS reports_count,
    ROUND(AVG(e1.age)) AS average_age
FROM
    Employees e1
WHERE
    e1.reports_to IS NOT NULL
GROUP BY
    e1.reports_to
ORDER BY
    e1.reports_to
;
-- @lc code=end

