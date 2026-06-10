/*
 * @lc app=leetcode id=2869 lang=typescript
 *
 * [2869] Minimum Operations to Collect Elements
 */

// @lc code=start
function minOperations(nums: number[], k: number): number {
  const coll = new Set();
  let i = 0;
  for (i = nums.length - 1; i >= 0; i--) {
    if (nums[i] <= k)
      coll.add(nums[i]);

    if (coll.size === k) {
      break;
    }
  }
  return nums.length - i;
};
// @lc code=end
