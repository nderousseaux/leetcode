/*
 * @lc app=leetcode id=645 lang=typescript
 *
 * [645] Set Mismatch
 */

// @lc code=start
function findErrorNums(nums: number[]): number[] {
    const n = nums.length;
    const count = new Array(n + 1).fill(0);
    for (const num of nums) {
        count[num]++;
    }
    let duplicate = -1, missing = -1;
    for (let i = 1; i <= n; i++) {
        if (count[i] === 2) duplicate = i;
        if (count[i] === 0) missing = i;
    }
    return [duplicate, missing];
};
// @lc code=end

