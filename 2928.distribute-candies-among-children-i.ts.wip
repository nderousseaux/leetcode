/*
 * @lc app=leetcode id=2928 lang=typescript
 *
 * [2928] Distribute Candies Among Children I
 */

// @lc code=start
function distributeCandies(n: number, limit: number): number {
  let res: number = 0;
  for (let i = 0; i <= limit; i++) {
    for (let j = 0; j <= limit; j++) {
      for (let k = 0; k <= limit; k++) {
        if (i + j + k == n) res++;
      }
    }
  }
  return res;
};
// @lc code=end
