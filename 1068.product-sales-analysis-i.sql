--
-- @lc app=leetcode id=1068 lang=postgresql
--
-- [1068] Product Sales Analysis I
--

-- @lc code=start
-- Write your postgresql query statement below
SELECT p.product_name, s.year, s.price
FROM Sales AS s
JOIN Product as p on s.product_id = p.product_id

-- @lc code=end

