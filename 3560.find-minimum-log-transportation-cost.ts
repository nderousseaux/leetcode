/*
 * @lc app=leetcode id=3560 lang=typescript
 *
 * [3560] Find Minimum Log Transportation Cost
 */

// @lc code=start
function minCuttingCost(n: number, m: number, k: number): number {
  let ma: number = Math.max(n, m);
  return ma > k ? (ma - k) * k : 0;
};
// @lc code=end
