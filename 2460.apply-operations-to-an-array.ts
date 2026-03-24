/*
 * @lc app=leetcode id=2460 lang=typescript
 *
 * [2460] Apply Operations to an Array
 */

// @lc code=start
function applyOperations(nums: number[]): number[] {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == nums[i + 1]) {
      nums[i] *= 2;
      nums[i + 1] = 0;
    }
  }

  let nb0 = nums.filter(a => a == 0).length;
  nums = nums.filter(a => a != 0);
  return [...nums, ...Array(nb0).fill(0)];

};
// @lc code=end
