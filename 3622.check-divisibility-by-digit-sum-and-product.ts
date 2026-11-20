/*
 * @lc app=leetcode id=3622 lang=typescript
 *
 * [3622] Check Divisibility by Digit Sum and Product
 */

// @lc code=start
function checkDivisibility(n: number): boolean {
  let digits: number[] = n.toString().split("").map(v => parseInt(v));
  return (
    n %
    (
      digits.reduce((a, c) => a + c) +
      digits.reduce((a, c) => a * c)
    ) == 0
  )
};
// @lc code=end
