/*
 * @lc app=leetcode id=2682 lang=typescript
 *
 * [2682] Find the Losers of the Circular Game
 */

// @lc code=start
function circularGameLosers(n: number, k: number): number[] {
  let recv: number[] = []
  let balPos: number = 0;
  let i: number = 1;
  while (!recv.includes(balPos)) {
    recv.push(balPos);
    balPos = (balPos + (i * k)) % n;
    i++;
  }
  let res: number[] = []
  for (let i = 0; i < n; i++) {
    if (!recv.includes(i))
      res.push(i + 1);
  }
  return res.sort((a, b) => a - b);
};
// @lc code=end
