/*
 * @lc app=leetcode id=3432 lang=typescript
 *
 * [3432] Count Partitions with Even Sum Difference
 */

// @lc code=start
function countPartitions(nums: number[]): number {
  let res: number = 0;
  for (let i = 1; i < nums.length; i++) {
    res += (
      nums.slice(0, i).reduce((a, c) => a + c) -
      nums.slice(i, nums.length).reduce((a, c) => a + c)
    ) % 2 == 0 ? 1 : 0;
  }
  return res;
};
// @lc code=end
