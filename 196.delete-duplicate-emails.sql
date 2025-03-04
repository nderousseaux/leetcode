--
-- @lc app=leetcode id=196 lang=postgresql
--
-- [196] Delete Duplicate Emails
--

-- @lc code=start
-- # Write your MySQL query statement below
DELETE FROM Person
WHERE Id NOT IN (
		SELECT Id FROM (
				SELECT MIN(Id) AS Id
				FROM Person
				GROUP BY Email
		) AS t
);


-- @lc code=end

