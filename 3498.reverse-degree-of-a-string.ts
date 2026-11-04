/*
 * @lc app=leetcode id=3498 lang=typescript
 *
 * [3498] Reverse Degree of a String
 */

// @lc code=start
function reverseDegree(s: string): number {

  return s.split("")
    .map((c, i) => (26 - (c.charCodeAt(0) - 97)) * (i + 1))
    .reduce((a, c) => a + c);
};
// @lc code=end
