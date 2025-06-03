--
-- @lc app=leetcode id=586 lang=postgresql
--
-- [586] Customer Placing the Largest Number of Orders
--

-- @lc code=start
-- # Write your postgresql query statement below

SELECT customer_number
FROM Orders
GROUP BY customer_number
ORDER BY count(customer_number) DESC
limit 1
;

-- @lc code=end
