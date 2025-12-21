/*
 * @lc app=leetcode id=1913 lang=typescript
 *
 * [1913] Maximum Product Difference Between Two Pairs
 */

// @lc code=start
function maxProductDifference(nums: number[]): number {
    let firstBig = 0;
    let secondBig = 0;
    let firstSmall = Infinity;
    let secondSmall = Infinity;

    for (const n of nums) {
        if (n < firstSmall) {
            [secondSmall, firstSmall] = [firstSmall, n];
        } else if (n < secondSmall) {
            secondSmall = n;
        }

        if (n > firstBig) {
            [secondBig, firstBig] = [firstBig, n];
        } else if (n > secondBig) {
            secondBig = n;
        }
    }

    return firstBig * secondBig - firstSmall * secondSmall;   
};
// @lc code=end

