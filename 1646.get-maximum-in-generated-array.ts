/*
 * @lc app=leetcode id=1646 lang=typescript
 *
 * [1646] Get Maximum in Generated Array
 */

// @lc code=start
function getMaximumGenerated(n: number): number {
    if (n == 0 || n == 1) return n;
    
    const nums: number[] = new Array(n + 1);
    nums[0] = 0;
    nums[1] = 1;
    
    for (let i = 2; i <= n; i++) {
        nums[i] = i % 2 === 0 ? nums[i / 2] : nums[Math.floor(i / 2)] + nums[Math.ceil(i / 2)];
    }
    
    return Math.max(...nums);
};
// @lc code=end

