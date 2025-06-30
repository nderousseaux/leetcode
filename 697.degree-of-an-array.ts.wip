/*
 * @lc app=leetcode id=697 lang=typescript
 *
 * [697] Degree of an Array
 */

// @lc code=start
function findShortestSubArray(nums: number[]): number {
    const first = new Map<number, number>();
    const count = new Map<number, number>();
    const last = new Map<number, number>();

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (!first.has(num)) {
            first.set(num, i);
        }
        count.set(num, (count.get(num) || 0) + 1);
        last.set(num, i);
    }

    const maxCount = Math.max(...count.values());
    let minLength = nums.length;

    for (const [num, cnt] of count) {
        if (cnt === maxCount) {
            minLength = Math.min(minLength, last.get(num)! - first.get(num)! + 1);
        }
    }

    return minLength;
};
// @lc code=end

