/*
 * @lc app=leetcode id=2441 lang=typescript
 *
 * [2441] Largest Positive Integer That Exists With Its Negative
 */

// @lc code=start
function findMaxK(nums: number[]): number {
  nums = nums.sort((a, b) => b - a);

  for (let i of nums) {
    if (nums.filter(a => a == -i).length > 0)
      return i
  }

  return -1;
};
// @lc code=end
