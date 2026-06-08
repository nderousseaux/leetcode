/*
 * @lc app=leetcode id=2855 lang=typescript
 *
 * [2855] Minimum Right Shifts to Sort the Array
 */

// @lc code=start
function minimumRightShifts(nums: number[]): number {
  let n: number = nums.length;
  let p: number = n;

  for (let i = 1; i < n; i++) {
    if (nums[i] < nums[i - 1]) {
      if (p !== n) return -1;
      p = i;
    }
  }

  if (p === n) return 0;

  return nums.at(-1)! < nums[0] ? n - p : -1;
};
// @lc code=end
