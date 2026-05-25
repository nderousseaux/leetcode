/*
 * @lc app=leetcode id=2765 lang=typescript
 *
 * [2765] Longest Alternating Subarray
 */

// @lc code=start
function alternatingSubarray(nums: number[]): number {
  function isAlternating(n: number[]): boolean {
    if (new Set(n).size != 2) return false;
    let ma = Math.max(...n);
    let mi = Math.min(...n);
    if (ma - mi != 1) return false;
    let m = true;
    for (let i = 0; i < n.length; i++) {
      if (n[i] != (m ? mi : ma))
        return false;
      m = !m;
    }
    return true;
  }

  let res: number = -1;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j <= nums.length; j++) {
      if (isAlternating(nums.slice(i, j)))
        res = Math.max(res, nums.slice(i, j).length)
    }
  }
  return res;
};
// @lc code=end
