/*
 * @lc app=leetcode id=1588 lang=typescript
 *
 * [1588] Sum of All Odd Length Subarrays
 */

// @lc code=start
function sumOddLengthSubarrays(arr: number[]): number {
    let res = 0;

    for (let l = 1; l <= arr.length;  l+=2)
        for(let i = 0; i+l <= arr.length; i++)
            res += arr.slice(i, i+l).reduce((a, c) => a + c, 0);


    return res;
    
};
// @lc code=end

