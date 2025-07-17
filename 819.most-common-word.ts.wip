/*
 * @lc app=leetcode id=819 lang=typescript
 *
 * [819] Most Common Word
 */

// @lc code=start
function mostCommonWord(paragraph: string, banned: string[]): string {
    let dic = {}

    let par = paragraph.toLowerCase().replace(/[!?',;.]/g, " ").split(" ")
    par.forEach(word => {
        if (banned.includes(word) || word === "")
            return;
        else if (dic[word] != null)
            dic[word]++;
        else
           dic[word] = 1 
    });

    return Object.keys(dic).reduce((a, b) => dic[a] > dic[b] ? a : b);
};
// @lc code=end

