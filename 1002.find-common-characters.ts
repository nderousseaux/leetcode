/*
 * @lc app=leetcode id=1002 lang=typescript
 *
 * [1002] Find Common Characters
 */

// @lc code=start
function commonChars(words: string[]): string[] {
    let common: string[] = words[0].split('')
    for (let i = 1; i < words.length; i++) {
        let cur: string[] = words[i].split('')
        let newCommon: string[] = []
        for (let char of common) {
            let index = cur.indexOf(char)
            if (index !== -1) {
                newCommon.push(char)
                cur.splice(index, 1)
            }
        }
        common = newCommon
    }
    
    return common;
};
// @lc code=end

