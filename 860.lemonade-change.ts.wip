/*
 * @lc app=leetcode id=860 lang=typescript
 *
 * [860] Lemonade Change
 */

// @lc code=start
function lemonadeChange(bills: number[]): boolean {
    let fives = 0;
    let tens = 0;

    for (const bill of bills) {
        if (bill === 5) {
            fives++;
        } else if (bill === 10) {
            if (fives === 0) return false;
            fives--;
            tens++;
        } else { // bill === 20
            if (tens > 0 && fives > 0) {
                tens--;
                fives--;
            } else if (fives >= 3) {
                fives -= 3;
            } else {
                return false;
            }
        }
    }

    return true;
};
// @lc code=end

