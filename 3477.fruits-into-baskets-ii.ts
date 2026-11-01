/*
 * @lc app=leetcode id=3477 lang=typescript
 *
 * [3477] Fruits Into Baskets II
 */

// @lc code=start
function numOfUnplacedFruits(fruits: number[], baskets: number[]): number {
  let res: number = 0;
  for (let f of fruits) {
    let unplaced: boolean = true;
    for (let i = 0; i < baskets.length; i++) {
      if (f <= baskets[i]) {
        baskets[i] = 0;
        unplaced = false;
        break;
      }
    }
    res += unplaced ? 1 : 0;
  }
  return res;
};
// @lc code=end
