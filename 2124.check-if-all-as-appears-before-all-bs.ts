/*
 * @lc app=leetcode id=2124 lang=typescript
 *
 * [2124] Check if All A's Appears Before All B's
 */

// @lc code=start
function checkString(s: string): boolean {
    let firstB = false;

    for(let c of s) {
        if (c == 'a' && firstB) return false;
        if (c == 'b' && !firstB) firstB = true;
    }
    return true;
};
// @lc code=end

