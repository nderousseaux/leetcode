/*
 * @lc app=leetcode id=2739 lang=typescript
 *
 * [2739] Total Distance Traveled
 */

// @lc code=start
function distanceTraveled(mainTank: number, additionalTank: number): number {
  let res: number = 0;
  while (mainTank > 0) {
    res += 1;
    mainTank -= 1;
    if (res % 5 == 0 && additionalTank > 0) {
      mainTank += 1;
      additionalTank -= 1;
    }
  }
  return res * 10;
};
// @lc code=end
