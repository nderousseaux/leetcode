/*
 * @lc app=leetcode id=2540 lang=typescript
 *
 * [2540] Minimum Common Value
 */

// @lc code=start
function getCommon(nums1: number[], nums2: number[]): number {
  let i: number = 0;
  let j: number = 0;

  while (i < nums1.length || j < nums2.length) {
    if (nums1[i] < nums2[j]) {
      if (i < nums1.length - 1) i++;
      else if (nums1[i] < nums2[j]) return -1; // Gain time
    }
    if (nums1[i] > nums2[j]) {
      if (j < nums2.length - 1) j++;
      else if (nums2[j] < nums1[i]) return -1; // Gain time
    }

    if (nums1[i] == nums2[j]) return nums1[i];
  }

  return -1;
};
// @lc code=end
