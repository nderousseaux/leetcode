/*
 * @lc app=leetcode id=2609 lang=typescript
 *
 * [2609] Find the Longest Balanced Substring of a Binary String
 */

// @lc code=start
function findTheLongestBalancedSubstring(s: string): number {
  function isBalanced(s: string): boolean {
    let nb0: number = 0;
    let nb1: number = 0;
    let zeroMode = true;

    for (let i = 0; i < s.length; i++) {
      if (s[i] === "0") {
        if (zeroMode)
          nb0 += 1;
        else
          return false;
      }
      if (s[i] === "1") {
        if (zeroMode)
          zeroMode = false
        nb1 += 1;
      }
    }
    return nb0 == nb1;
  }


  let res: number = 0;
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j <= s.length; j++) {
      if (isBalanced(s.substring(i, j)))
        res = Math.max(j - i, res);
    }
  }

  return res;
};
// @lc code=end
