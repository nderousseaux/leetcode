/*
 * @lc app=leetcode id=724 lang=typescript
 *
 * [724] Find Pivot Index
 */

// @lc code=start
function pivotIndex(nums: number[]): number {
    let l = 0;
    let sum = nums.reduce((a,b) => a+b)
    for(let i = 0; i < nums.length; i++){
        if(l === sum - l - nums[i])
            return i
        l += nums[i]
    }
    return -1
};
// @lc code=end

