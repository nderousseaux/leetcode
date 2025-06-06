--
-- @lc app=leetcode id=595 lang=postgresql
--
-- [595] Big Countries
--

-- @lc code=start
-- # Write your postgresql query statement below

SELECT name, population, area
FROM World
WHERE area >= 3000000 OR
population >= 25000000
;

-- @lc code=end

