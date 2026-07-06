/*
 * @lc app=leetcode id=2744 lang=typescript
 *
 * [2744] Find Maximum Number of String Pairs
 */

// @lc code=start
function maximumNumberOfStringPairs(words: string[]): number {
  let res: number = 0;
  for (let i = 0; i < words.length; i++) {
    for (let j = i + 1; j < words.length; j++) {
      if (words[i] === words[j].split("").reverse().join("")) {
        res += 1;
        break;
      }
    }
  }
  return res;
};
// @lc code=end
