/*
 * @lc app=leetcode id=3438 lang=typescript
 *
 * [3438] Find Valid Pair of Adjacent Digits in String
 */

// @lc code=start
function findValidPair(s: string): string {
  for (let i = 0; i < s.length - 1; i++) {
    if (
      (s[i] != s[i + 1]) &&
      (s.split("").filter((p) => p == s[i]).length == parseInt(s[i])) &&
      (s.split("").filter((p) => p == s[i + 1]).length == parseInt(s[i + 1]))
    )
      return s[i] + s[i + 1]
  }
  return "";
};
// @lc code=end
