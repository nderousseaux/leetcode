/*
 * @lc app=leetcode id=3033 lang=typescript
 *
 * [3033] Modify the Matrix
 */

// @lc code=start
function modifiedMatrix(matrix: number[][]): number[][] {
  for (let c = 0; c < matrix[0].length; c++) {
    // Get the max value
    // And all index of -1
    let max: number = -1;
    let idxRem: number[] = [];
    for (let r = 0; r < matrix.length; r++) {
      max = Math.max(max, matrix[r][c]);
      if (matrix[r][c] == -1)
        idxRem.push(r);
    }

    // for each -1, remplace by max
    for (let i = 0; i < idxRem.length; i++) {
      matrix[idxRem[i]][c] = max;
    }

  }
  return matrix
};
// @lc code=end
