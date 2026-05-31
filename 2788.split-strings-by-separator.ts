/*
 * @lc app=leetcode id=2788 lang=typescript
 *
 * [2788] Split Strings by Separator
 */

// @lc code=start
function splitWordsBySeparator(words: string[], separator: string): string[] {
  let res: string[] = []
  for (let w of words) {
    res.push(...w.split(separator));
  }
  return res.filter(w => w.length > 0);
};
// @lc code=end
