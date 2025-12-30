/*
 * @lc app=leetcode id=2006 lang=typescript
 *
 * [2006] Count Number of Pairs With Absolute Difference K
 */

// @lc code=start
function countKDifference(nums: number[], k: number): number {
    let res: number = 0;
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i+1; j < nums.length; j++) {
            if(Math.abs(nums[i] - nums[j]) == k)
                res += 1;
        }
    }
    return res;
};
// @lc code=end

