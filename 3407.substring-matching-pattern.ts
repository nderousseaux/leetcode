/*
 * @lc app=leetcode id=3407 lang=typescript
 *
 * [3407] Substring Matching Pattern
 */

// @lc code=start
function hasMatch(s: string, p: string): boolean {
  return new RegExp(p.replace("*", ".*")).test(s);
};
// @lc code=end
