/*
 * @lc app=leetcode id=2164 lang=typescript
 *
 * [2164] Sort Even and Odd Indices Independently
 */

// @lc code=start
function sortEvenOdd(nums: number[]): number[] {
    let even: number[] = nums
        .filter((v, i) => i % 2 == 0)
        .sort((a,b) => b - a);
    let odd: number[] = nums
        .filter((v, i) => i % 2 == 1)
        .sort((a,b) => a - b);

    return nums.map((_, i) => i % 2 ? odd.pop()! : even.pop()!)
};
// @lc code=end

