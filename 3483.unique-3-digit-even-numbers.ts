/*
 * @lc app=leetcode id=3483 lang=typescript
 *
 * [3483] Unique 3-Digit Even Numbers
 */

// @lc code=start
function totalNumbers(digits: number[]): number {
  let res: number[] = [];
  for (let i = 0; i < digits.length; i++) {
    for (let j = 0; j < digits.length; j++) {
      if (i == j) continue;
      for (let k = 0; k < digits.length; k++) {
        if (i == k) continue;
        if (j == k) continue;
        if (digits[k] % 2 == 1) continue;
        if (digits[i] == 0) continue;
        res.push(digits[i] * 100 + digits[j] * 10 + digits[k]);
      }
    }
  }
  return [...new Set(res)].length;
};
// @lc code=end
