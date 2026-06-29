/*
 * @lc app=leetcode id=2960 lang=typescript
 *
 * [2960] Count Tested Devices After Test Operations
 */

// @lc code=start
function countTestedDevices(batteryPercentages: number[]): number {
  let res: number = 0;
  for (let i = 0; i < batteryPercentages.length; i++) {
    if (batteryPercentages[i] > 0) {
      res += 1;
      for (let j = i + 1; j < batteryPercentages.length; j++)
        batteryPercentages[j] = Math.max(0, batteryPercentages[j] - 1)
    }
  }
  return res;
};
// @lc code=end
