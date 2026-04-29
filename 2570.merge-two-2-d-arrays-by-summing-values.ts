/*
 * @lc app=leetcode id=2570 lang=typescript
 *
 * [2570] Merge Two 2D Arrays by Summing Values
 */

// @lc code=start
function mergeArrays(nums1: number[][], nums2: number[][]): number[][] {
  let work: number[][] = nums1.concat(nums2).sort((a, b) => a[0] - b[0]);
  let res: number[][] = [];

  for (let item of work) {
    if (res.length == 0 || res[res.length - 1][0] != item[0])
      res.push(item);
    else
      res[res.length - 1][1] += item[1];
  }

  return res;
};
// @lc code=end
