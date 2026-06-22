/*
 * @lc app=leetcode id=2942 lang=typescript
 *
 * [2942] Find Words Containing Character
 */

// @lc code=start
function findWordsContaining(words: string[], x: string): number[] {
  let res: number[] = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i].includes(x))
      res.push(i);
  }
  return res;
};
// @lc code=end
