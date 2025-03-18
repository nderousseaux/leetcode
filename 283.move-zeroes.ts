/*
 * @lc app=leetcode id=283 lang=typescript
 *
 * [283] Move Zeroes
 */

// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
    let zeroCount = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            zeroCount++;
        } else {
            nums[i - zeroCount] = nums[i];
        }
    }
    for (let i = nums.length - zeroCount; i < nums.length; i++) {
        nums[i] = 0;
    }
};
// @lc code=end

