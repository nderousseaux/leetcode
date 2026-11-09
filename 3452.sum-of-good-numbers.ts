/*
 * @lc app=leetcode id=3452 lang=typescript
 *
 * [3452] Sum of Good Numbers
 */

// @lc code=start
function sumOfGoodNumbers(nums: number[], k: number): number {
  function isGood(idx: number): boolean {
    let a: number = idx - k < 0 ? -1 : nums[idx - k];
    let b: number = idx + k >= nums.length ? -1 : nums[idx + k];
    return nums[idx] > a && nums[idx] > b;
  }
  return nums.filter((v, idx) => isGood(idx)).reduce((a, c) => a + c, 0);
};
// @lc code=end
