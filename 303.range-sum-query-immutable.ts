/*
 * @lc app=leetcode id=303 lang=typescript
 *
 * [303] Range Sum Query - Immutable
 */

// @lc code=start
class NumArray {
    acc: number[];

    constructor(nums: number[]) {
        this.acc = new Array(nums.length + 1).fill(0);
        for (let i = 0; i < nums.length; i++) {
            this.acc[i + 1] = this.acc[i] + nums[i];
        }
    }

    sumRange(left: number, right: number): number {
        return this.acc[right + 1] - this.acc[left];
        
    }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
// @lc code=end

