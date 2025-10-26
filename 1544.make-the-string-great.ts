/*
 * @lc app=leetcode id=1544 lang=typescript
 *
 * [1544] Make The String Great
 */

// @lc code=start
function makeGood(s: string): string {
        const stack: string[] = [];
        for (const char of s) {
            if (
                stack.length > 0 &&
                Math.abs(stack[stack.length - 1].charCodeAt(0) - char.charCodeAt(0)) === 32
            ) {
                stack.pop();
            } else {
                stack.push(char);
            }
        }
        return stack.join('');
};
// @lc code=end

