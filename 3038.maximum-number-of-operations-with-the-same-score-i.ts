/*
 * @lc app=leetcode id=3038 lang=typescript
 *
 * [3038] Maximum Number of Operations With the Same Score I
 */

// @lc code=start
function maxOperations(nums: number[]): number {
  let score: number = nums[0] + nums[1];
  let res: number = 1;
  for (let i = 2; i < nums.length; i += 2) {
    if (nums[i] + nums[i + 1] != score)
      break;
    res += 1;
  }
  return res;
};
// @lc code=end
