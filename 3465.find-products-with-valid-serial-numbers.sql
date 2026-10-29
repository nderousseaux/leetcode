--
-- @lc app=leetcode id=3465 lang=postgresql
--
-- [3465] Find Products with Valid Serial Numbers
--

-- @lc code=start
-- Write your PostgreSQL query statement below
SELECT *
FROM products
WHERE REGEXP_LIKE(description, '(^|\s)SN\d{4}-\d{4}($|\s)')
ORDER BY product_id
;

-- @lc code=end
