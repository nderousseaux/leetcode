/*
 * @lc app=leetcode id=2833 lang=typescript
 *
 * [2833] Furthest Point From Origin
 */

// @lc code=start
function furthestDistanceFromOrigin(moves: string): number {
  const l = (moves.match(/L/gi) || []).length;
  const r = (moves.match(/R/gi) || []).length;
  const d = (moves.match(/_/g) || []).length;
  return Math.abs(l - r) + d;
};
// @lc code=end
