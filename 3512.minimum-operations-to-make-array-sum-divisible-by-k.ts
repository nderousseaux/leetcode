/*
 * @lc app=leetcode id=3512 lang=typescript
 *
 * [3512] Minimum Operations to Make Array Sum Divisible by K
 */

// @lc code=start
function minOperations(nums: number[], k: number): number {
  return nums.reduce((a, c) => a + c) % k;
};
// @lc code=end
