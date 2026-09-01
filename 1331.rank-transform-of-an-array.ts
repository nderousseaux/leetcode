/*
 * @lc app=leetcode id=1331 lang=typescript
 *
 * [1331] Rank Transform of an Array
 */

// @lc code=start
function arrayRankTransform(arr: number[]): number[] {
    const sorted = Array.from(new Set(arr)).sort((a, b) => a - b);
    const rankMap = new Map<number, number>();
    sorted.forEach((num, idx) => rankMap.set(num, idx + 1));
    return arr.map(num => rankMap.get(num)!);
};
// @lc code=end

