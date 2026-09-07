/*
 * @lc app=leetcode id=1021 lang=typescript
 *
 * [1021] Remove Outermost Parentheses
 */

// @lc code=start
function removeOuterParentheses(s: string): string {
    let result = '';
    let depth = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            if (depth > 0) {
                result += s[i];
            }
            depth++;
        } else {
            depth--;
            if (depth > 0) {
                result += s[i];
            }
        }
    }

    return result;
};
// @lc code=end

