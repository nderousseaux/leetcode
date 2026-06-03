/*
 * @lc app=leetcode id=2815 lang=typescript
 *
 * [2815] Max Pair Sum in an Array
 */

// @lc code=start
function maxSum(nums: number[]): number {
  function largestDigit(n: number): number {
    return Math.max(...n.toString().split("").map(n => parseInt(n)))
  }

  let res: number = -1;
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (largestDigit(nums[i]) == largestDigit(nums[j])) {
        res = Math.max(res, nums[i] + nums[j])
      }
    }
  }
  return res;
};
// @lc code=end
