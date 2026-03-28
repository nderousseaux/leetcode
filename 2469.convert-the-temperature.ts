/*
 * @lc app=leetcode id=2469 lang=typescript
 *
 * [2469] Convert the Temperature
 */

// @lc code=start
function convertTemperature(celsius: number): number[] {
  return [
    celsius + 273.15,
    celsius * 1.80 + 32.00
  ]
};
// @lc code=end
