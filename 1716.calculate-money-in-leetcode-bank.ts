/*
 * @lc app=leetcode id=1716 lang=typescript
 *
 * [1716] Calculate Money in Leetcode Bank
 */

// @lc code=start
function totalMoney(n: number): number {
    let res: number = 0;

    for(let i = 0; i < n; i++)
        res += Math.floor((i/7)) + (i % 7 + 1)

    return res;
};
// @lc code=end

