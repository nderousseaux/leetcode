/*
 * @lc app=leetcode id=2395 lang=typescript
 *
 * [2395] Find Subarrays With Equal Sum
 */

// @lc code=start
function findSubarrays(nums: number[]): boolean {
    let res: number[] = [];
    for(let i = 0; i < nums.length - 1; i++) {
        let r = nums[i] + nums[i+1];
        if (res.filter((j) => j == r).length > 0) return true;
        res.push(r);
    }

    return false;
    
};
// @lc code=end

