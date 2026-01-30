/*
 * @lc app=leetcode id=2255 lang=typescript
 *
 * [2255] Count Prefixes of a Given String
 */

// @lc code=start
function countPrefixes(words: string[], s: string): number {
    let res = 0;

    for (let w of words) {
        if (
            w.length <= s.length &&
            w == s.substring(0, w.length)
        )
            res++;
    }
    return res;
};
// @lc code=end

