/*
 * @lc app=leetcode id=3000 lang=typescript
 *
 * [3000] Maximum Area of Longest Diagonal Rectangle
 */

// @lc code=start
function areaOfMaxDiagonal(dimensions: number[][]): number {
  function diag(rec: number[]): number {
    return Math.sqrt(rec[0] ** 2 + rec[1] ** 2);
  }
  function area(rec: number[]): number { return rec[0] * rec[1]; }

  let res: number[] = [area(dimensions[0]), diag(dimensions[0])];

  for (let i = 1; i < dimensions.length; i++) {
    let d: number = diag(dimensions[i]);
    let a: number;

    if (d > res[1]) res = [area(dimensions[i]), d];
    else if (d == res[1] && (a = area(dimensions[i])) > res[0])
      res = [a, d];
  }

  return res[0];
};
// @lc code=end
