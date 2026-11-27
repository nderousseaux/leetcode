/*
 * @lc app=leetcode id=3678 lang=typescript
 *
 * [3678] Smallest Absent Positive Greater Than Average
 */

// @lc code=start
function smallestAbsent(nums: number[]): number {
  let avg: number = Math.floor((nums.reduce((a, c) => a + c) / nums.length) + 1)
  if (avg <= 0) avg = 1;
  while (true) {
    if (nums.indexOf(avg) == -1) return avg;
    avg++;
  }
  return -1;
};
// @lc code=end
