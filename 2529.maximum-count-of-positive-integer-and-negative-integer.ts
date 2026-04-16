/*
 * @lc app=leetcode id=2529 lang=typescript
 *
 * [2529] Maximum Count of Positive Integer and Negative Integer
 */

// @lc code=start
function maximumCount(nums: number[]): number {
  let neg: number = 0;
  let pos: number = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0) neg++;
    if (nums[i] > 0) { pos = nums.length - i; break; }
  }
  return Math.max(
    neg,
    pos
  );
};
// @lc code=end
