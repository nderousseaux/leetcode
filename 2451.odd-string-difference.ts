/*
 * @lc app=leetcode id=2451 lang=typescript
 *
 * [2451] Odd String Difference
 */

// @lc code=start
function oddString(words: string[]): string {
  let freq = new Map<string, [number, string]>();
  for (let w of words) {
    let r: number[] = []
    for (let i = 0; i < w.length - 1; i++) r.push(w.charCodeAt(i + 1) - w.charCodeAt(i))

    let key = r.toString()
    freq.set(key, [(freq.get(key)?.[0] || 0) + 1, w]);
  }

  for (let [count, word] of freq.values()) {
    if (count === 1) return word;
  }

  return "";
};
// @lc code=end
