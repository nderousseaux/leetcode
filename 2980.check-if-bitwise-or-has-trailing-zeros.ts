/*
 * @lc app=leetcode id=2980 lang=typescript
 *
 * [2980] Check if Bitwise OR Has Trailing Zeros
 */

// @lc code=start
function hasTrailingZeros(nums: number[]): boolean {
  return true ? nums.filter(v => v % 2 == 0).length > 1 : false;
};
// @lc code=end
