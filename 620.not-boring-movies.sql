--
-- @lc app=leetcode id=620 lang=postgresql
--
-- [620] Not Boring Movies
--

-- @lc code=start
-- Write your postgresql query statement below
SELECT *
FROM Cinema
WHERE
    id % 2 = 1
    AND description != 'boring'
ORDER BY rating DESC
;

-- @lc code=end

