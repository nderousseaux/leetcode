/*
 * @lc app=leetcode id=3162 lang=typescript
 *
 * [3162] Find the Number of Good Pairs I
 */

// @lc code=start
function numberOfPairs(nums1: number[], nums2: number[], k: number): number {
  function isGoodPair(n1: number, n2: number, k: number): boolean {
    return n1 % (n2 * k) == 0;
  }
  let res: number = 0;
  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++)
      res += isGoodPair(nums1[i], nums2[j], k) ? 1 : 0;
  }
  return res;
};
// @lc code=end
