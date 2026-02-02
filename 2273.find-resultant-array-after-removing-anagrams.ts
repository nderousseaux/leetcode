/*
 * @lc app=leetcode id=2273 lang=typescript
 *
 * [2273] Find Resultant Array After Removing Anagrams
 */

// @lc code=start
function removeAnagrams(words: string[]): string[] {

    function isAnagram(w1: string, w2: string): boolean {
        return (
            w1.split("").sort().join("") ===
            w2.split("").sort().join("")
        )
    }

    let end:boolean = false

    while (!end) {
        end = true;
        // find two anagram
        for(let i = 1; i < words.length - 0; i++) {
            if (isAnagram(words[i-1], words[i])){
                end = false;
                words.splice(i, 1);
                break;
            }
        }
    }

    return words;
    
};
// @lc code=end

