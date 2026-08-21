/*
 * @lc app=leetcode id=3090 lang=typescript
 *
 * [3090] Maximum Length Substring With Two Occurrences
 */

// @lc code=start
function maximumLengthSubstring(s: string): number {
  function isValid(sub: string): boolean {
    let occ: Record<string, number> = {};
    for (const char of sub)
      occ[char] = (occ[char] ?? 0) + 1;

    return Object.values(occ).filter(v => v > 2).length == 0;
  }
  let res: number = 0;
  for (let i = 0; i <= s.length; i++) {
    for (let j = i + 1; j <= s.length; j++) {
      if (isValid(s.substring(i, j)))
        res = Math.max(res, j - i)
    }
  }
  return res;
};
// @lc code=end
