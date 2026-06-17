/*
 * @lc app=leetcode id=2908 lang=typescript
 *
 * [2908] Minimum Sum of Mountain Triplets I
 */

// @lc code=start
function minimumSum(nums: number[]): number {
  let res: number = Infinity;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (nums[i] < nums[j] && nums[k] < nums[j])
          res = Math.min(res, nums[i] + nums[j] + nums[k]);
      }
    }
  }
  return res == Infinity ? -1 : res
};
// @lc code=end
