/*
 * @lc app=leetcode id=2558 lang=typescript
 *
 * [2558] Take Gifts From the Richest Pile
 */

// @lc code=start
function pickGifts(gifts: number[], k: number): number {
  for (let i = 0; i < k; i++) {
    let index = gifts.indexOf(Math.max(...gifts));
    gifts[index] = Math.floor(Math.sqrt(gifts[index]));
  }

  return gifts.reduce((p, c) => c + p);
};
// @lc code=end
