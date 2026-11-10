/*
 * @lc app=leetcode id=3545 lang=typescript
 *
 * [3545] Minimum Deletions for At Most K Distinct Characters
 */

// @lc code=start
function minDeletion(s: string, k: number): number {
  let res = 0;

  let freq = new Map();
  for (let i = 0; i < s.length; i++)
    freq.set(s[i], (freq.get(s[i]) ?? 0) + 1);

  while (freq.size > k) {
    let [minKey, minValue] = [...freq]
      .reduce((min, cur) => (cur[1] < min[1] ? cur : min));
    freq.delete(minKey);
    res += minValue;
  }

  return res;
};
// @lc code=end
