/*
 * @lc app=leetcode id=2089 lang=typescript
 *
 * [2089] Find Target Indices After Sorting Array
 */

// @lc code=start
function targetIndices(nums: number[], target: number): number[] {
    return nums
            .sort((a,b) => a - b)
            .map((v, i) => v == target ? i : -1)
            .filter(v => v != -1)
        ;
};
// @lc code=end

