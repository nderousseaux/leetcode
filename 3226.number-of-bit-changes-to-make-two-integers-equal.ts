/*
 * @lc app=leetcode id=3226 lang=typescript
 *
 * [3226] Number of Bit Changes to Make Two Integers Equal
 */

// @lc code=start
function minChanges(n: number, k: number): number {
  // It possible to convert n -> k
  if ((n & k) != k) return -1;

  let res: number = 0;

  for (let c of n.toString(2)) res += parseInt(c);
  for (let c of k.toString(2)) res -= parseInt(c);

  return res;
};
// @lc code=end
