/*
 * @lc app=leetcode id=3232 lang=typescript
 *
 * [3232] Find if Digit Game Can Be Won
 */

// @lc code=start
function canAliceWin(nums: number[]): boolean {
  let sumSingle: number = nums.filter(v => v < 10).reduce((a, c) => a + c, 0);
  let sumDouble: number = nums.filter(v => v > 9).reduce((a, c) => a + c, 0);

  return sumDouble != sumSingle;
};
// @lc code=end
