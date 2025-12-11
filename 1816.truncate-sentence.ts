/*
 * @lc app=leetcode id=1816 lang=typescript
 *
 * [1816] Truncate Sentence
 */

// @lc code=start
function truncateSentence(s: string, k: number): string {
    return s.split(" ").slice(0,k).join(" ")
};
// @lc code=end

