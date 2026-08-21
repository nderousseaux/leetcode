/*
 * @lc app=leetcode id=3099 lang=typescript
 *
 * [3099] Harshad Number
 */

// @lc code=start
function sumOfTheDigitsOfHarshadNumber(x: number): number {
  let sum: number = 0;
  let tmp: number = x;

  while (tmp > 0) {
    sum += tmp % 10;
    tmp = Math.floor(tmp / 10);
  }
  if (x % sum == 0) return sum;
  return -1;
};
// @lc code=end
