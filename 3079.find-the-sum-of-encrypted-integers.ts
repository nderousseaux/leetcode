/*
 * @lc app=leetcode id=3079 lang=typescript
 *
 * [3079] Find the Sum of Encrypted Integers
 */

// @lc code=start
function sumOfEncryptedInt(nums: number[]): number {
  function encrypt(x: number): number {
    let xL: number[] = x.toString()
      .split("")
      .map(v => parseInt(v));
    let m = Math.max(...xL)
    return parseInt(
      xL.map(v => m)
        .join("")
    );
  }
  return nums
    .map(v => encrypt(v))
    .reduce((a, c) => a + c);
};
// @lc code=end
