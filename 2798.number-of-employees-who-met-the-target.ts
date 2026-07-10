/*
 * @lc app=leetcode id=2798 lang=typescript
 *
 * [2798] Number of Employees Who Met the Target
 */

// @lc code=start
function numberOfEmployeesWhoMetTarget(hours: number[], target: number): number {
  return hours.filter(h => h >= target).length;
};
// @lc code=end
