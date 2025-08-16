/*
 * @lc app=leetcode id=976 lang=typescript
 *
 * [976] Largest Perimeter Triangle
 */

// @lc code=start
function largestPerimeter(nums: number[]): number {
    // Sort in descending order to check largest possible perimeters first
    nums.sort((a, b) => b - a);

    // Check consecutive triplets - if sorted, we only need to check if a + b > c
    for (let i = 0; i < nums.length - 2; i++) {
        if (nums[i] < nums[i + 1] + nums[i + 2]) {
            return nums[i] + nums[i + 1] + nums[i + 2];
        }
    }

    return 0;
    
};
// @lc code=end

