/*
 * @lc app=leetcode id=2144 lang=typescript
 *
 * [2144] Minimum Cost of Buying Candies With Discount
 */

// @lc code=start
function minimumCost(cost: number[]): number {
    let discount = 0;
    let res = 0;
    for(let c of cost.sort((a,b) => b - a)) {
        if(discount<2) {
            res += c;
            discount++;
        }
        else
            discount = 0;
    }
    return res;
};
// @lc code=end

