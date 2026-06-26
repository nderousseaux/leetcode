/*
 * @lc app=leetcode id=2873 lang=typescript
 *
 * [2873] Maximum Value of an Ordered Triplet I
 */

// @lc code=start
function maximumTripletValue(nums: number[]): number {
  let res: number = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++)
        res = Math.max(res, (nums[i] - nums[j]) * nums[k])
    }
  }
  return res;
};
// @lc code=end
