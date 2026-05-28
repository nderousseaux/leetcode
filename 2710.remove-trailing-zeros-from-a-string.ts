/*
 * @lc app=leetcode id=2710 lang=typescript
 *
 * [2710] Remove Trailing Zeros From a String
 */

// @lc code=start
function removeTrailingZeros(num: string): string {
  for (let i = num.length - 1; i >= 0; i--) {
    if (num[i] !== "0") break;
    num = num.slice(0, num.length - 1);
  }
  return num;
};
// @lc code=end
