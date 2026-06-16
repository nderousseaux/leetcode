/*
 * @lc app=leetcode id=2778 lang=typescript
 *
 * [2778] Sum of Squares of Special Elements
 */

// @lc code=start
function sumOfSquares(nums: number[]): number {
  return nums
    .filter((v, i) => nums.length % (i + 1) == 0)
    .reduce((a, c) => a + c ** 2, 0);
};
// @lc code=end
