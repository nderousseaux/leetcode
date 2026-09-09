/*
 * @lc app=leetcode id=3110 lang=typescript
 *
 * [3110] Score of a String
 */

// @lc code=start
function scoreOfString(s: string): number {
  let res: number = 0;
  for (let i = 1; i < s.length; i++)
    res += Math.abs(s.charCodeAt(i) - s.charCodeAt(i - 1));
  return res;
};
// @lc code=end
