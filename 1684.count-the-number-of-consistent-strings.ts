/*
 * @lc app=leetcode id=1684 lang=typescript
 *
 * [1684] Count the Number of Consistent Strings
 */

// @lc code=start
function countConsistentStrings(allowed: string, words: string[]): number {
    let res: number = 0;

    for (let i = 0; i < words.length; i++) {
        let a: Set<string> = new Set(allowed.split(""));
        let w: Set<string> = new Set(words[i].split(""));
        if ((new Set([...w].filter(x => !a.has(x)))).size == 0)
            res+=1
    }

    return res;
};
// @lc code=end

