--
-- @lc app=leetcode id=1527 lang=postgresql
--
-- [1527] Patients With a Condition
--

-- @lc code=start
-- Write your PostgreSQL query statement below
SELECT
    *
FROM
    Patients
WHERE
    conditions LIKE 'DIAB1%' OR
    conditions LIKE '% DIAB1%'
;

-- @lc code=end

