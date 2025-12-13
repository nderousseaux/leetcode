/*
 * @lc app=leetcode id=1837 lang=typescript
 *
 * [1837] Sum of Digits in Base K
 */

// @lc code=start
function sumBase(n: number, k: number): number {
    let res = 0;
    while (n > 0) {
        res += n % k;
        n = Math.floor(n/k);        
    }
    return res;
};
// @lc code=end

