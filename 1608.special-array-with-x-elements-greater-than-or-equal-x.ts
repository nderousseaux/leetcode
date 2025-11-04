/*
 * @lc app=leetcode id=1608 lang=typescript
 *
 * [1608] Special Array With X Elements Greater Than or Equal X
 */

// @lc code=start
function specialArray(nums: number[]): number {
    for (let spe = nums.length; spe > 0; spe--) {
        if (nums.filter(a => a >= spe).length == spe)
            return spe
    }
    return -1; 
};
// @lc code=end

