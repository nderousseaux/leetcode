--
-- @lc app=leetcode id=1484 lang=posgresql
--
-- [1484] Group Sold Products By The Date
--

-- @lc code=start
-- Write your PostgreSQL query statement below
SELECT
    sell_date,
    COUNT(DISTINCT product) as num_sold,
    STRING_AGG(DISTINCT product, ',' ORDER BY product) AS products
FROM
    Activities
GROUP BY
    sell_date
ORDER BY
    sell_date
;
-- @lc code=end

