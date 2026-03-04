/*
 * @lc app=leetcode id=2239 lang=typescript
 *
 * [2239] Find Closest Number to Zero
 */

// @lc code=start
function findClosestNumber(nums: number[]): number {
    nums = nums.sort((a, b) => a - b);
    
    // Looking for sign swap
    for(let i = 0; i < nums.length; i++){
        if (i == 0 && nums[i] >= 0) return nums[i];

        if (nums[i] >= 0 && nums[i - 1] < 0) {
            
            // Closest to 0 
            if (Math.abs(nums[i-1]) < Math.abs(nums[i]))
                return nums[i-1]
            if (Math.abs(nums[i-1]) > Math.abs(nums[i]))
                return nums[i]
            return nums[i];
        }
    }

    return nums[nums.length-1];
};
// @lc code=end

