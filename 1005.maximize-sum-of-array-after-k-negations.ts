/*
 * @lc app=leetcode id=1005 lang=typescript
 *
 * [1005] Maximize Sum Of Array After K Negations
 */

// @lc code=start
function largestSumAfterKNegations(nums: number[], k: number): number {
   
    for(let i = 0; i<k; i++){
        nums = nums.sort((a,b) => a - b);
        
        nums[0] = -nums[0]
    }
    
    return nums.reduce((a,b) => a + b, 0)
};
// @lc code=end

