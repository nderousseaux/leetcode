--
-- @lc app=leetcode id=181 lang=postgresql
--
-- [181] Employees Earning More Than Their Managers
--

-- @lc code=start
-- # Write your MySQL query statement below
select e1.Name as Employee
from Employee e1
join Employee e2
on e1.ManagerId = e2.Id
where e1.Salary > e2.Salary
;

-- @lc code=end

