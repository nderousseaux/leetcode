/*
 * @lc app=leetcode id=2996 lang=typescript
 *
 * [2996] Smallest Missing Integer Greater Than Sequential Prefix Sum
 */

// @lc code=start
function missingInteger(nums: number[]): number {
  function isSequential(ar: number[]): boolean {
    for (let j = 1; j < ar.length; j++)
      if (ar[j] != ar[j - 1] + 1) return false;
    return true;
  }

  // Find longest
  let prefix: number[] = [];
  for (let i = nums.length; i > 0; i--) {
    if (isSequential(nums.slice(0, i))) {
      prefix = nums.slice(0, i);
      break;
    }
  }
  let res = prefix.reduce((a, c) => a + c);

  // Incr while res in nums
  while (nums.filter(v => v == res).length > 0)
    res += 1;

  return res;

};
// @lc code=end
