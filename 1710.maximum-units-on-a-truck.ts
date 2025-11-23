/*
 * @lc app=leetcode id=1710 lang=typescript
 *
 * [1710] Maximum Units on a Truck
 */

// @lc code=start
function maximumUnits(boxTypes: number[][], truckSize: number): number {
    let res = 0;
    boxTypes = boxTypes.sort((a, b) => b[1] - a[1]);
    for (let i = 0; i < boxTypes.length && truckSize > 0; i++) {
        const count = Math.min(truckSize, boxTypes[i][0]);
        res += count * boxTypes[i][1];
        truckSize -= count;
    }
    return res;
};
// @lc code=end

