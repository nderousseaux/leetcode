/*
 * @lc app=leetcode id=3487 lang=typescript
 *
 * [3487] Maximum Unique Subarray Sum After Deletion
 */

// @lc code=start
function maxSum(nums: number[]): number {
  nums = [...new Set(nums)];
  let newNums: number[] = nums.filter(v => v > 0);
  nums = newNums.length == 0 ? [Math.max(...nums)] : newNums;
  return nums.reduce((a, c) => a + c);
};
// @lc code=end
