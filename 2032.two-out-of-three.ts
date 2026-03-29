/*
 * @lc app=leetcode id=2032 lang=typescript
 *
 * [2032] Two Out of Three
 */

// @lc code=start
function twoOutOfThree(nums1: number[], nums2: number[], nums3: number[]): number[] {
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);
    const set3 = new Set(nums3);

    const result = new Set<number>();

    for (const num of set1) {
        if (set2.has(num) || set3.has(num)) {
            result.add(num);
        }
    }

    for (const num of set2) {
        if (set3.has(num)) {
            result.add(num);
        }
    }

    return Array.from(result);
};
// @lc code=end

