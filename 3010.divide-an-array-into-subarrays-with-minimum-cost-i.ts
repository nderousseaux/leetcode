/*
 * @lc app=leetcode id=3010 lang=typescript
 *
 * [3010] Divide an Array Into Subarrays With Minimum Cost I
 */

// @lc code=start
function minimumCost(nums: number[]): number {
  let res: number = nums[0];
  nums = nums.slice(1).sort((a, b) => a - b);
  return res + nums[0] + nums[1];
};
// @lc code=end
