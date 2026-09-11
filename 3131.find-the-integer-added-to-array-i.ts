/*
 * @lc app=leetcode id=3131 lang=typescript
 *
 * [3131] Find the Integer Added to Array I
 */

// @lc code=start
function addedInteger(nums1: number[], nums2: number[]): number {
  return nums2.sort((a, b) => b - a)[0] - nums1.sort((a, b) => b - a)[0]
};
// @lc code=end
