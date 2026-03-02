/*
 * @lc app=leetcode id=2413 lang=typescript
 *
 * [2413] Smallest Even Multiple
 */

// @lc code=start
function smallestEvenMultiple(n: number): number {
    let i: number = n;
    while (true) {
        if (i % 2 == 0 && i % n == 0) return i;        
        i++;
    }
};
// @lc code=end

