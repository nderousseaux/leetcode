/*
 * @lc app=leetcode id=3174 lang=typescript
 *
 * [3174] Clear Digits
 */

// @lc code=start
function clearDigits(s: string): string {
  function isDigit(c: string): boolean {
    return !isNaN(Number(c)) || c === '';
  }

  let str: string[] = s.split('');

  for (let i = 0; i < str.length; i++) {
    // If is digit
    if (isDigit(str[i])) {
      // check all char before
      let j = i - 1;
      while (j >= 0 && isDigit(str[j])) j--;
      str[i] = '';
      str[j] = '';
    }
  }

  return str.join('');
};
// @lc code=end
