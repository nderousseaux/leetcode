/*
 * @lc app=leetcode id=2210 lang=typescript
 *
 * [2210] Count Hills and Valleys in an Array
 */

// @lc code=start
function countHillValley(nums: number[]): number {
    let res: number = 0;

    for (let i = 1; i < nums.length - 1; i++){
        let right = i + 1;
        while (nums[i] == nums[right])
            right++;

        if (
            (nums[i - 1] < nums[i] && nums[i] > nums[right]) ||
            (nums[i - 1] > nums[i] && nums[i] < nums[right])
        )
            res+= 1;
        
    }
    return res;  
};
// @lc code=end

