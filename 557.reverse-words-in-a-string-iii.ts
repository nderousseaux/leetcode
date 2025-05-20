/*
 * @lc app=leetcode id=557 lang=typescript
 *
 * [557] Reverse Words in a String III
 */

// @lc code=start
function reverseWords(s: string): string {
    let res: string[] = s.split(" ")
    res = res.map((sub) => sub.split("").reverse().join(""))

    return res.join(" ")
};
// @lc code=end

