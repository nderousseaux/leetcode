/*
 * @lc app=leetcode id=3340 lang=typescript
 *
 * [3340] Check Balanced String
 */

// @lc code=start
function isBalanced(num: string): boolean {
  let sums: number[] = [0, 0];
  for (let i = 0; i < num.length; i++)
    sums[i % 2] += parseInt(num.charAt(i));

  return sums[0] == sums[1];
};
// @lc code=end
