/*
 * @lc app=leetcode id=2656 lang=typescript
 *
 * [2656] Maximum Sum With Exactly K Elements
 */

// @lc code=start
function maximizeSum(nums: number[], k: number): number {
  let res: number = 0;
  let max: number = Math.max(...nums);

  for (let i = 0; i < k; i++) {
    res += max;
    max++;
  }

  return res;
};
// @lc code=end
