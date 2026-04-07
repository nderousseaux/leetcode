/*
 * @lc app=leetcode id=2500 lang=typescript
 *
 * [2500] Delete Greatest Value in Each Row
 */

// @lc code=start
function deleteGreatestValue(grid: number[][]): number {
  let res: number = 0;
  while (grid[0].length > 0) {
    let add: number = 0;
    // For each row
    for (let i = 0; i < grid.length; i++) {
      let m: number = Math.max(...grid[i]);
      add = Math.max(m, add);
      // Delete the max of the row
      var index = grid[i].indexOf(m);
      if (index !== -1) {
        grid[i].splice(index, 1);
      }
    }
    res += add;
  }
  return res;
};
// @lc code=end
