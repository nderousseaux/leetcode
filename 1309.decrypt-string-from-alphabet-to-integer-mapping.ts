/*
 * @lc app=leetcode id=1309 lang=typescript
 *
 * [1309] Decrypt String from Alphabet to Integer Mapping
 */

// @lc code=start
function freqAlphabets(s: string): string {
    let res: number[] = [];

    // Start by the end
    let i: number = s.length - 1;
    while (i >= 0) {
        // If # -> 2 char
        if (s.charAt(i) == "#"){
            res.unshift(parseInt(s.substring(i-2, i)));
            i -= 2;
        }
        else
            res.unshift(parseInt(s.charAt(i)));
        i--;

    }
    res = res.map((a) => a+96);

    return String.fromCharCode(...res);
    
};
// @lc code=end

