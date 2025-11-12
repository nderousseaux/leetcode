--
-- @lc app=leetcode id=1661 lang=postgresql
--
-- [1661] Average Time of Process per Machine
--

-- @lc code=start
-- Write your PostgreSQL query statement below
SELECT 
    machine_id,
    ROUND(
        AVG(
            CASE
                WHEN activity_type = 'start' THEN -timestamp
                ELSE timestamp
        END)::decimal * 2
    , 3) AS processing_time
FROM
    Activity
GROUP BY
    machine_id
ORDER BY
    machine_id
;

-- @lc code=end

