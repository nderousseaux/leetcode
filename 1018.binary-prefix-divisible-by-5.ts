/*
 * @lc app=leetcode id=1018 lang=typescript
 *
 * [1018] Binary Prefix Divisible By 5
 */

// @lc code=start
function prefixesDivBy5(nums: number[]): boolean[] {
    let res: boolean[] = []
    let n: number = 0;
    for (let i = 0; i < nums.length; i++) {
        n = (n * 2 + nums[i]) % 5;
        res.push(n == 0);
    }
    return res;
    
};
// @lc code=end

