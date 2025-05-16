/*
 * @lc app=leetcode id=31 lang=typescript
 *
 * [31] Next Permutation
 */

// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */
function nextPermutation(nums: number[]): void {
    const n = nums.length;
    let i = n - 2;

    // Find the first decreasing element from the end
    while (i >= 0 && nums[i] >= nums[i + 1]) {
        i--;
    }

    if (i >= 0) {
        let j = n - 1;
        // Find the first element larger than nums[i] from the end
        while (j >= 0 && nums[j] <= nums[i]) {
            j--;
        }
        // Swap them
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }

    // Reverse the elements after index i
    let left = i + 1;
    let right = n - 1;
    while (left < right) {
        [nums[left], nums[right]] = [nums[right], nums[left]];
        left++;
        right--;
    }
};
// @lc code=end

