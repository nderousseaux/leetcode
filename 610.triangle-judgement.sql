--
-- @lc app=leetcode id=610 lang=postgresql
--
-- [610] Triangle Judgement
--

-- @lc code=start
-- Write your PostgreSQL query statement below

-- Bigger SIDE should be smaller than the sum of the two other side
SELECT *, 
    CASE
        WHEN ((x+y+z) - GREATEST(x,y,z)) > GREATEST(x,y,z) THEN 'Yes' 
        ELSE 'No'
    END AS triangle
FROM Triangle;

-- @lc code=end

