/*
 * @lc app=leetcode id=1763 lang=typescript
 *
 * [1763] Longest Nice Substring
 */

// @lc code=start
function isNice(s:string): boolean {
    const letter: string[] = s.split('')
    for(const char of s){
        if(char === char.toUpperCase() && !letter.includes(char.toLowerCase()) || 
            char === char.toLowerCase() && !letter.includes(char.toUpperCase())){
           return false;
        } 
    }
    return true;
}
function longestNiceSubstring(s: string): string {
    let maxSub = "";
    let currSub = "";
    
    for(let i = 0; i < s.length; i++){
        currSub = s[i];
        for(let j = i + 1; j < s.length; j++){
            currSub += s[j];
            if(isNice(currSub) && currSub.length > maxSub.length) maxSub = currSub;
        }
        currSub = ""
    }

    return maxSub;
};
// @lc code=end

