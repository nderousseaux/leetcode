/*
 * @lc app=leetcode id=917 lang=typescript
 *
 * [917] Reverse Only Letters
 */

// @lc code=start
function reverseOnlyLetters(s: string): string {
    // Save the position of all special char
    let special: { [key: number]: string } = {}
    let new_s = "";
    for(let i = 0; i < s.length; i++) {
        let c = s[i];
        if (!c.match(/[a-zA-Z]/)) {
            special[i] = c;
        } 
        else
            new_s += c;
    }
    new_s = new_s.split('').reverse().join('');

    // Reinsert special characters at their original positions
    let result = '';
    let letterIndex = 0;
    for (let i = 0; i < s.length; i++) {
        if (special[i] !== undefined) {
            result += special[i];
        } else {
            result += new_s[letterIndex];
            letterIndex++;
        }
    }

    return result;
    
};
// @lc code=end

