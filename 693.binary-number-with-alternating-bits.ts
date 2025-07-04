/*
 * @lc app=leetcode id=693 lang=typescript
 *
 * [693] Binary Number with Alternating Bits
 */

// @lc code=start
function hasAlternatingBits(n: number): boolean {
    let nextShouldBe = !(n % 2 == 1);
    n = n >> 1  

    while (n > 0) {
        if ((n%2 == 1) != nextShouldBe){
            return false
        }
        n = n >> 1
        nextShouldBe = !nextShouldBe
    }

    return true
};
// @lc code=end

