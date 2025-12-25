/*
 * @lc app=leetcode id=1957 lang=typescript
 *
 * [1957] Delete Characters to Make Fancy String
 */

// @lc code=start
function makeFancyString(s: string): string {
    let res: string[] = [s[0], s[1]];

    for(let i = 2; i < s.length; i++) {
        if (
            res[res.length-1] != s[i] ||
            res[res.length-2] != s[i]
        )   
            res.push(s[i]);
    }

    return res.join("");
};
// @lc code=end

