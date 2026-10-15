/*
 * @lc app=leetcode id=3360 lang=typescript
 *
 * [3360] Stone Removal Game
 */

// @lc code=start
function canAliceWin(n: number): boolean {
  let current: number = 10;
  let alicePlay: boolean = true;
  while (n >= current) {
    n -= current;
    current -= 1;
    alicePlay = !alicePlay;
  }

  return !alicePlay;
};
// @lc code=end
