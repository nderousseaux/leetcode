--
-- @lc app=leetcode id=1211 lang=postgresql
--
-- [1211] Queries Quality and Percentage
--

-- @lc code=start
-- Write your PostgreSQL query statement below
SELECT
    query_name,
    ROUND(SUM(rating::numeric / position) / COUNT(result), 2) 
        AS quality,
    ROUND(100. * COUNT(rating) FILTER (WHERE rating < 3) / count(*), 2)
        AS poor_query_percentage
FROM
    Queries
WHERE
    query_name IS NOT NULL
GROUP BY
    query_name
;
-- @lc code=end

