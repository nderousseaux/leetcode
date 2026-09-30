/*
 * @lc app=leetcode id=3083 lang=typescript
 *
 * [3083] Existence of a Substring in a String and Its Reverse
 */

// @lc code=start
function isSubstringPresent(s: string): boolean {
  let sReverse = s.split("").reverse().join("");

  for (let i = 0; i < s.length - 1; i++) {
    if (sReverse.includes(s.substring(i, i + 2)))
      return true;
  }
  return false;
};
// @lc code=end
