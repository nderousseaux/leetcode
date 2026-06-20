/*
 * @lc app=leetcode id=2923 lang=typescript
 *
 * [2923] Find Champion I
 */

// @lc code=start
function findChampion(grid: number[][]): number {
  for (let i = 0; i < grid.length; i++) {
    if (grid[i].filter(v => v == 1).length == grid.length - 1)
      return i;
  }
  return -1;
};
// @lc code=end
