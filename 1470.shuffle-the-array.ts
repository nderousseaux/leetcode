/*
 * @lc app=leetcode id=1470 lang=typescript
 *
 * [1470] Shuffle the Array
 */

// @lc code=start
function shuffle(nums: number[], n: number): number[] {
    let res: number[] = []
    for(let i = 0; i < n; i++) {
        res.push(nums[i])
        res.push(nums[i + n])
    }
    return res;
};
// @lc code=end

