--
-- @lc app=leetcode id=1378 lang=postgresql
--
-- [1378] Replace Employee ID With The Unique Identifier
--

-- @lc code=start
-- Write your PostgreSQL query statement below

SELECT
    u.unique_id,
    e.name
FROM 
    Employees e
LEFT JOIN
    EmployeeUNI u
    ON u.id = e.id
;

-- @lc code=end

