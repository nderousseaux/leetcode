/*
 * @lc app=leetcode id=1051 lang=typescript
 *
 * [1051] Height Checker
 */

// @lc code=start
function heightChecker(heights: number[]): number {
    let res: number = 0;
    // Calculate the good tab
    let good: number[] = [...heights].sort((a, b) => a - b);

    for (let i = 0; i < heights.length; i++) {
        if (good[i] !== heights[i])
            res++;
    }

    return res;
};
// @lc code=end

