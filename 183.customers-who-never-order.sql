--
-- @lc app=leetcode id=183 lang=postgresql
--
-- [183] Customers Who Never Order
--

-- @lc code=start
-- # Write your MySQL query statement below
select Name as Customers
from Customers
where Id not in (
		select CustomerId
		from Orders
)
;

-- @lc code=end

