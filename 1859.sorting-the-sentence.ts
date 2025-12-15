/*
 * @lc app=leetcode id=1859 lang=typescript
 *
 * [1859] Sorting the Sentence
 */

// @lc code=start
function sortSentence(s: string): string {
    return s
        .split(" ")
        .sort((w1, w2) => 
            parseInt(w1[w1.length-1]) - parseInt(w2[w2.length-1])
        )
        .map(w => w.substring(0, w.length-1))
        .join(" ")
    
};
// @lc code=end

