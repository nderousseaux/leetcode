/*
 * @lc app=leetcode id=2520 lang=typescript
 *
 * [2520] Count the Digits That Divide a Number
 */

// @lc code=start
function countDigits(num: number): number {
  let res: number = 0;

  for (let c of num.toString().split(""))
    res += (num % parseInt(c) === 0) ? 1 : 0;

  return res;
};
// @lc code=end
