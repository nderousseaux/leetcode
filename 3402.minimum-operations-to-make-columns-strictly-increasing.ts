/*
 * @lc app=leetcode id=3402 lang=typescript
 *
 * [3402] Minimum Operations to Make Columns Strictly Increasing
 */

// @lc code=start
function minimumOperations(grid: number[][]): number {
  let res: number = 0;
  for (let j = 0; j < grid[0].length; j++) {
    for (let i = 1; i < grid.length; i++) {
      if (grid[i][j] > grid[i - 1][j]) continue;
      res += grid[i - 1][j] - grid[i][j] + 1;
      grid[i][j] += grid[i - 1][j] - grid[i][j] + 1;
    }
  }
  return res;
};
// @lc code=end
