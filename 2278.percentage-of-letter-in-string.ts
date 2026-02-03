/*
 * @lc app=leetcode id=2278 lang=typescript
 *
 * [2278] Percentage of Letter in String
 */

// @lc code=start
function percentageLetter(s: string, letter: string): number {
    return Math.floor(
        (
            s.split("").filter(a => a == letter).length / s.length
        ) * 100
    );
};
// @lc code=end

