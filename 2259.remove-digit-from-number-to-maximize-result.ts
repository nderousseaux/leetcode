/*
 * @lc app=leetcode id=2259 lang=typescript
 *
 * [2259] Remove Digit From Number to Maximize Result
 */

// @lc code=start
function removeDigit(number: string, digit: string): string {
    let res: string = "";
    
    for (let i = 0; i < number.length; i++) {
        if (number[i] !== digit) continue;
        let n: string = 
            number.substring(0, i) + number.substring(i+1);
        if (n > res)
            res = n;
    }
    return res;
}
// @lc code=end

