/*
 * @lc app=leetcode id=1512 lang=typescript
 *
 * [1512] Number of Good Pairs
 */

// @lc code=start
function numIdenticalPairs(nums: number[]): number {
    let res: number = 0
    for(let i = 0; i < nums.length; i++) {
        for(let j = i+1; j < nums.length; j++) {
            res += nums[i] == nums[j] ? 1 : 0;
        }
    }
    return res;  
};
// @lc code=end

