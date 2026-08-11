/*
 * @lc app=leetcode id=2965 lang=typescript
 *
 * [2965] Find Missing and Repeated Values
 */

// @lc code=start
function findMissingAndRepeatedValues(grid: number[][]): number[] {
  let foundValues: number[] = [];
  let missing: number = -1;
  let duplicate: number = -1;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (foundValues.indexOf(grid[i][j]) > -1)
        duplicate = grid[i][j];
      else
        foundValues.push(grid[i][j]);
    }
  }

  for (let i = 1; i < grid.length ** 2 + 1; i++) {
    if (foundValues.indexOf(i) < 0) {
      missing = i;
      break;
    }
  }
  return [duplicate, missing];
};
// @lc code=end
