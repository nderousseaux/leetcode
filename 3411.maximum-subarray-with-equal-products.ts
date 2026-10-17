/*
 * @lc app=leetcode id=3411 lang=typescript
 *
 * [3411] Maximum Subarray With Equal Products
 */

// @lc code=start
function maxLength(nums: number[]): number {

  //Utils functions
  const prod = (nums: number[]): number => {
    return nums.reduce((c, a) => c * a);
  };

  //
  const gcd_two = (a: number, b: number): number => {
    if (b === 0) return a;
    return gcd_two(b, a % b);
  };

  const gcd = (number: number[]): number => {
    return number.sort((a, b) => b - a).reduce((a, b) => gcd_two(a, b));
  };

  const lcm = (number: number[]): number => {
    return number.reduce((a, b) => lcm_two(a, b), 1)
  };

  const lcm_two = (a: number, b: number): number => {
    if (a === 0 || b === 0) return 0;
    return Math.abs(a * b) / gcd_two(a, b);
  };

  const isProductEquivalent = (nums: number[]): boolean => {
    return prod(nums) == lcm(nums) * gcd(nums);
  }

  let windowSize = nums.length;
  while (windowSize > 0) {
    for (let i = 0; i + windowSize <= nums.length; i++)
      if (isProductEquivalent(nums.slice(i, i + windowSize))) return windowSize;
    windowSize--;
  }

  return 0;
};
// @lc code=end
