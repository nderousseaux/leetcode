/*
 * @lc app=leetcode id=953 lang=typescript
 *
 * [953] Verifying an Alien Dictionary
 */

// @lc code=start
function isAlienSorted(words: string[], order: string): boolean {
    // Test if a > b
    function sorted(a: string, b: string){
        for(let i = 0; i < Math.min(a.length, b.length); i++){
            const aIndex = order.indexOf(a[i]);
            const bIndex = order.indexOf(b[i]);
            if (aIndex > bIndex){
                return false;
            } else if (aIndex < bIndex) {
                return true;
            }
        }
        return a.length <= b.length;
    }

    for (let i = 1; i < words.length; i++){
        if (!sorted(words[i-1], words[i]))
            return false;
    }
    return true;
};
// @lc code=end

