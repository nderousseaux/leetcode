--
-- @lc app=leetcode id=1587 lang=posgresql
--
-- [1587] Bank Account Summary II
--

-- @lc code=start
-- Write your PostgreSQL query statement below
SELECT
    name,
    SUM(amount) as balance
FROM
    Transactions t
JOIN
    Users u ON u.account = t.account
GROUP BY
    u.account,
    name
HAVING
    SUM(amount) > 10000
;

-- @lc code=end

