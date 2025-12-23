/*
 * @lc app=leetcode id=1935 lang=typescript
 *
 * [1935] Maximum Number of Words You Can Type
 */

// @lc code=start
function canBeTypedWords(text: string, brokenLetters: string): number {
    return text
        .split(" ")
        .filter((w) => {
            return !w.split("").some(c => brokenLetters.includes(c))
        })
        .length;
};
// @lc code=end

