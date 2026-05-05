/*
 * @lc app=leetcode id=2591 lang=typescript
 *
 * [2591] Distribute Money to Maximum Children
 */

// @lc code=start
function distMoney(money: number, children: number): number {
  let result: number = -1;

  for (let i = 0; i <= Math.floor(money / 8) && i <= children; i++) {
    let moneyLeft = money - i * 8;
    let moneyLeftC = children - i;

    if (
      moneyLeft >= moneyLeftC &&
      !(moneyLeft === 4 && moneyLeftC === 1) &&
      !(moneyLeft > 0 && moneyLeftC === 0)
    )
      result = i;
  }

  return result;
};
// @lc code=end
