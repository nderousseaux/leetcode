/*
 * @lc app=leetcode id=2335 lang=typescript
 *
 * [2335] Minimum Amount of Time to Fill Cups
 */

// @lc code=start
function fillCups(amount: number[]): number {
    let max = 0, sum = 0;
    for (let i of amount) {
        max = Math.max(i, max);
        sum += i;
    }
    
    return Math.max(max, Math.floor((sum + 1) / 2));
};
// @lc code=end

