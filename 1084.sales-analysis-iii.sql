--
-- @lc app=leetcode id=1084 lang=postgresql
--
-- [1084] Sales Analysis III
--

-- @lc code=start
-- Write your PostgreSQL query statement below

SELECT p.product_id, p.product_name
FROM Product as p
JOIN Sales as s ON s.product_id = p.product_id
GROUP BY p.product_id, p.product_name
HAVING MIN(s.sale_date) >= '2019-01-01' AND MAX(s.sale_date) <= '2019-03-31';
;

-- @lc code=end

