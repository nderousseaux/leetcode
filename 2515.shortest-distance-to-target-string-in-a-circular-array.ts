/*
 * @lc app=leetcode id=2515 lang=typescript
 *
 * [2515] Shortest Distance to Target String in a Circular Array
 */

// @lc code=start
function closestTarget(words: string[], target: string, startIndex: number): number {
  let res: number = 0;

  for (let i = 0; i <= words.length / 2; i++) {
    if (
      words[(startIndex + i) % words.length] === target ||
      words[(startIndex - i + words.length) % words.length] === target
    )
      return res;
    res++;
  }

  return -1
};
// @lc code=end
