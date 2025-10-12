/*
 * @lc app=leetcode id=1446 lang=typescript
 *
 * [1446] Consecutive Characters
 */

// @lc code=start
function maxPower(s: string): number {
    let res: number = 0
    let curr:  number = 0;
    let last: string = "aa"
    for(let i = 0; i < s.length; i++) {
        if (last === s[i])
            curr++;
        else {
            res = Math.max(res, curr + 1);
            curr = 0;
        }
        last = s[i];
    }


    return Math.max(res, curr + 1);
};
// @lc code=end

