/*
 * @lc app=leetcode id=3216 lang=typescript
 *
 * [3216] Lexicographically Smallest String After a Swap
 */

// @lc code=start
function getSmallestString(s: string): string {
  let res: string[] = s.split("");

  for (let i = 0; i < s.length; i++) {
    let a: string = s.charAt(i);

    // next char can be swap ?
    if (res[i + 1] < a && parseInt(res[i + 1]) % 2 == parseInt(a) % 2) {
      res[i] = res[i + 1];
      res[i + 1] = a;
      break
    }
  }
  return res.join("");
};
// @lc code=end
