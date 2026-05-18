/*
 * @lc app=leetcode id=2696 lang=typescript
 *
 * [2696] Minimum String Length After Removing Substrings
 */

// @lc code=start
function minLength(s: string): number {
  let pattern: number = -1;
  while (
    (pattern = s.indexOf("AB")) != -1 ||
    (pattern = s.indexOf("CD")) != -1) {
    s = s.substring(0, pattern).concat(s.substring(pattern + 2, s.length));
  }
  return s.length;
};
// @lc code=end
