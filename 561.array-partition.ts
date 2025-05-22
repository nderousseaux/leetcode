/*
 * @lc app=leetcode id=561 lang=typescript
 *
 * [561] Array Partition
 */

// @lc code=start
function arrayPairSum(nums: number[]): number {
    let res: number = 0

    // Step 1. Ordering elements
    nums = nums.sort((a, b) => a - b);
    
    // Step 2. add all max elements
    for(let i = 0; i < nums.length; i+=2)
        res += nums[i]
    
    return res;
};
// @lc code=end

