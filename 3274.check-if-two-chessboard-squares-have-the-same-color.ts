/*
 * @lc app=leetcode id=3274 lang=typescript
 *
 * [3274] Check if Two Chessboard Squares Have the Same Color
 */

// @lc code=start
function checkTwoChessboards(coordinate1: string, coordinate2: string): boolean {
  function toCoordinate(c: string): number[] {
    return [c.charCodeAt(0) - 96, parseInt(c.charAt(1)) - 1]
  }

  function isBlack(c: number[]): boolean {
    return c[0] % 2 == c[1] % 2;
  }

  let c1: number[] = toCoordinate(coordinate1);
  let c2: number[] = toCoordinate(coordinate2);

  return isBlack(c1) == isBlack(c2)
};
// @lc code=end
