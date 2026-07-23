/*
 * @lc app=leetcode id=2614 lang=typescript
 *
 * [2614] Prime In Diagonal
 */

// @lc code=start
function diagonalPrime(nums: number[][]): number {
  function isPrime(n: number): boolean {
    if (n <= 1) return false;
    for (let i = 2; i * i <= n; i++)
      if (n % i == 0) return false;
    return true;
  }

  let res: number = 0;

  for (let i = 0; i < nums.length; i++) {
    if (isPrime(nums[i][i]))
      res = Math.max(res, nums[i][i])
    if (isPrime(nums[i][nums.length - i - 1]))
      res = Math.max(res, nums[i][nums.length - i - 1])
  }

  return res;
};
// @lc code=end
