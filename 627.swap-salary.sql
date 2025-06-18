--
-- @lc app=leetcode id=627 lang=postgresql
--
-- [627] Swap Salary
--

-- @lc code=start
-- Write your PostgreSQL query statement below
UPDATE Salary
SET sex =
    CASE sex
        WHEN 'm' THEN 'f'
        ELSE 'm'
    END
;


-- @lc code=end

