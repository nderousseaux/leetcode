/*
 * @lc app=leetcode id=2481 lang=typescript
 *
 * [2481] Minimum Cuts to Divide a Circle
 */

// @lc code=start
function numberOfCuts(n: number): number {
  if (n == 1) return 0;
  if (n % 2 == 0) return n / 2;
  return n;
};
// @lc code=end
