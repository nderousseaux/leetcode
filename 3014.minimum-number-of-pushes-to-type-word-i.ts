/*
 * @lc app=leetcode id=3014 lang=typescript
 *
 * [3014] Minimum Number of Pushes to Type Word I
 */

// @lc code=start
function minimumPushes(word: string): number {
  let res: number = 0;
  for (let i = 0; i < word.length; i++) {
    if (i < 8) res += 1;
    else if (i < 16) res += 2;
    else if (i < 24) res += 3;
    else res += 4;
  }
  return res;
};
// @lc code=end
