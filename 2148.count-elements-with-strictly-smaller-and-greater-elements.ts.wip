/*
 * @lc app=leetcode id=2148 lang=typescript
 *
 * [2148] Count Elements With Strictly Smaller and Greater Elements 
 */

// @lc code=start
function countElements(nums: number[]): number {
    return nums
        .sort((a,b) => a - b)
        .filter(x => x != nums[0] && x != nums[nums.length-1])
        .length
};
// @lc code=end

