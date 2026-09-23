/*
 * @lc app=leetcode id=3210 lang=typescript
 *
 * [3210] Find the Encrypted String
 */

// @lc code=start
function getEncryptedString(s: string, k: number): string {
  let res: string = ""
  for (let i = 0; i < s.length; i++) {
    res += s.charAt((i + k) % s.length);
  }
  return res;
};
// @lc code=end
