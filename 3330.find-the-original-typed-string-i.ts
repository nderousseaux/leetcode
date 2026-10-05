/*
 * @lc app=leetcode id=3330 lang=typescript
 *
 * [3330] Find the Original Typed String I
 */

// @lc code=start
function possibleStringCount(word: string): number {
  let res: number = 1;
  for (let i = 0; i < word.length - 1; i++)
    res += word.charAt(i) == word.charAt(i + 1) ? 1 : 0
  return res;
};
// @lc code=end
