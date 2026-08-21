/*
 * @lc app=leetcode id=3095 lang=typescript
 *
 * [3095] Shortest Subarray With OR at Least K I
 */

// @lc code=start
function minimumSubarrayLength(nums: number[], k: number): number {
  function isSpecial(sub: number[]): boolean {
    return sub.reduce((a, c) => a | c) >= k;
  }
  let res = Infinity;
  for (let i = 0; i <= nums.length; i++) {
    for (let j = i + 1; j <= nums.length; j++) {
      if (isSpecial(nums.slice(i, j))) {
        if (j - i == 1) return 1;
        res = Math.min(res, j - i);
      }
    }
  }
  return res == Infinity ? -1 : res
};
// @lc code=end
