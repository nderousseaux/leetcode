/*
 * @lc app=leetcode id=3300 lang=typescript
 *
 * [3300] Minimum Element After Replacement With Digit Sum
 */

// @lc code=start
function minElement(nums: number[]): number {
  let res: number = Infinity;
  for (let v of nums)
    res = Math.min(
      res,
      v.toString().split("").map(v => parseInt(v)).reduce((acc, val) => acc + val)
    );
  return res;
};
// @lc code=end
