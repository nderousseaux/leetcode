--
-- @lc app=leetcode id=197 lang=postgresql
--
-- [197] Rising Temperature
--

-- @lc code=start
-- # Write your MySQL query statement below
SELECT w1.Id
FROM Weather w1, Weather w2
WHERE w1.Temperature > w2.Temperature
AND w1.RecordDate = w2.RecordDate + INTERVAL '1 day'
;

-- @lc code=end

