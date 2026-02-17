/*
 * @lc app=leetcode id=2351 lang=typescript
 *
 * [2351] First Letter to Appear Twice
 */

// @lc code=start
function repeatedCharacter(s: string): string {
    let v: string = ""
    for (let i = 0; i < s.length; i++) {
        if (v.indexOf(s[i]) != -1) return s[i];
        v += s[i]
    }

    return "IMP"
};
// @lc code=end

