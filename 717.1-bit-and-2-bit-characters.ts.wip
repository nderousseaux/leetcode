/*
 * @lc app=leetcode id=717 lang=typescript
 *
 * [717] 1-bit and 2-bit Characters
 */

// @lc code=start
function isOneBitCharacter(bits: number[]): boolean {
    if (bits.length < 2) return true;
    if (bits[bits.length-2] == 0) return true
    
    for (let i = 0; i < bits.length -1; i++) {
        if (i == bits.length-2) return false
        if (bits[i] == 1) i++;
    }

    return true
};
// @lc code=end

