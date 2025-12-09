/*
 * @lc app=leetcode id=1796 lang=typescript
 *
 * [1796] Second Largest Digit in a String
 */

// @lc code=start
function secondHighest(s: string): number {
    // keep only digit
    let sd: number[] = s.split("")
        .map(c => Number(c))
        .filter(x => !isNaN(x))

    // No duplicate
    let un = [...new Set(sd)];

    // Sorted
    un = un.sort((a,b) => b - a);

    return un.length < 2 ? -1 : un[1];
};
// @lc code=end

