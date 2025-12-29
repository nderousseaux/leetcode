/*
 * @lc app=leetcode id=1984 lang=typescript
 *
 * [1984] Minimum Difference Between Highest and Lowest of K Scores
 */

// @lc code=start
function minimumDifference(nums: number[], k: number): number {
    let res = Infinity;

    // sort res
    nums = nums.sort((a,b) => a - b);

    // Sliding window of k
    for(let i = 0; i < nums.length - k + 1; i++) {
        res = Math.min(res, nums[i+k-1] - nums[i])
        if (res == 0) return res; // Faster end
    }
    return res;
};
// @lc code=end

