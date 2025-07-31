/*
 * @lc app=leetcode id=747 lang=typescript
 *
 * [747] Largest Number At Least Twice of Others
 */

// @lc code=start
function dominantIndex(nums: number[]): number {
    // We looking for the two largest integer
    let largest = 0;
    let secondLargest = -1;

    // Find the largest element
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[largest]) {
            secondLargest = largest;
            largest = i;
        } 
        else if (secondLargest === -1 || nums[i] > nums[secondLargest])
            secondLargest = i;
    }

    // Check if largest is at least twice the second largest
    if (secondLargest === -1 || nums[largest] >= 2 * nums[secondLargest])
        return largest;
    return -1;
};
// @lc code=end

