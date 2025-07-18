/*
 * @lc app=leetcode id=746 lang=typescript
 *
 * [746] Min Cost Climbing Stairs
 */

// @lc code=start
function minCostClimbingStairs(cost: number[]): number {
    for(let i=2; i<cost.length; i++)
        cost[i] += Math.min(cost[i-1], cost[i-2]);

    return Math.min(cost[cost.length-1], cost[cost.length-2])
};
// @lc code=end