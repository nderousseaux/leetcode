/*
 * @lc app=leetcode id=2706 lang=typescript
 *
 * [2706] Buy Two Chocolates
 */

// @lc code=start
function buyChoco(prices: number[], money: number): number {
  let left: number = prices.sort((a, b) => a - b).slice(0, 2).reduce((a, c) => a + c);
  return left <= money ? money - left : money;
};
// @lc code=end
