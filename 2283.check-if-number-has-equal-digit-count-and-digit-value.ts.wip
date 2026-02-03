/*
 * @lc app=leetcode id=2283 lang=typescript
 *
 * [2283] Check if Number Has Equal Digit Count and Digit Value
 */

// @lc code=start
function digitCount(num: string): boolean {
    for (let i = 0; i < num.length; i++) {
        if (
            num.split("").filter(a => a == i.toString()).length 
            !=
            parseInt(num[i])
        )
            return false;
    }

    return true;
};
// @lc code=end

