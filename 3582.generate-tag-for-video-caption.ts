/*
 * @lc app=leetcode id=3582 lang=typescript
 *
 * [3582] Generate Tag for Video Caption
 */

// @lc code=start
function generateTag(caption: string): string {
  return caption
    .replace(/\d/g, '')
    .trim()
    .split(/\s+/)
    .map((v, i) =>
      i == 0
        ? ("#" + v.toLowerCase())
        : (v[0].toUpperCase() + v.slice(1).toLowerCase())
    )
    .join("")
    .slice(0, 100)
    ;
};
// @lc code=end
