/*
 * @lc app=leetcode id=1758 lang=typescript
 *
 * [1758] Minimum Changes To Make Alternating Binary String
 */

// @lc code=start
function minOperations(s: string): number {
    let n1: number = 0;
    let n2: number = 0;

    s.split("").forEach((v, i) => { 
        parseInt(v) == i % 2 ? n1++ : n2++ 
    })

    return Math.min(n1,n2);
};
// @lc code=end

