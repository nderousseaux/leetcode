/*
 * @lc app=leetcode id=3379 lang=typescript
 *
 * [3379] Transformed Array
 */

// @lc code=start
function constructTransformedArray(nums: number[]): number[] {
  return nums.map((v, i): number =>
    nums[(i + v % nums.length + nums.length) % nums.length]
  )
};
// @lc code=end
