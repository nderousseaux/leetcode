/*
 * @lc app=leetcode id=1518 lang=typescript
 *
 * [1518] Water Bottles
 */

// @lc code=start
function numWaterBottles(numBottles: number, numExchange: number): number {
    let res: number = numBottles;
    let empty: number = numBottles;
    while (empty >= numExchange) {
        const exchange = Math.floor(empty / numExchange);
        res += exchange;
        empty = (empty % numExchange) + exchange;
    }

    return res;
};
// @lc code=end

