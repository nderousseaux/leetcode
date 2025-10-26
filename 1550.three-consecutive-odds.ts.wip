/*
 * @lc app=leetcode id=1550 lang=typescript
 *
 * [1550] Three Consecutive Odds
 */

// @lc code=start
function threeConsecutiveOdds(arr: number[]): boolean {
    let nbCons: number = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) nbCons = 0;
        else {
            nbCons += 1;
            if (nbCons >= 3) return true;
        }
    }
    return false;
};
// @lc code=end

