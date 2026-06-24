/*
 * @lc app=leetcode id=2839 lang=typescript
 *
 * [2839] Check if Strings Can be Made Equal With Operations I
 */

// @lc code=start
function canBeEqual(s1: string, s2: string): boolean {
  return (
    (
      (s1.charAt(0) == s2.charAt(0) && s1.charAt(2) == s2.charAt(2)) ||
      (s1.charAt(0) == s2.charAt(2) && s1.charAt(2) == s2.charAt(0))
    ) &&
    (
      (s1.charAt(1) == s2.charAt(1) && s1.charAt(3) == s2.charAt(3)) ||
      (s1.charAt(1) == s2.charAt(3) && s1.charAt(3) == s2.charAt(1))
    )
  )
};
// @lc code=end
