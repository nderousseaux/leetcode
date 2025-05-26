/*
 * @lc app=leetcode id=575 lang=typescript
 *
 * [575] Distribute Candies
 */

// @lc code=start
function distributeCandies(candyType: number[]): number {
    // Remove duplicates
    let s: Set<number> = new Set(candyType)

    // Optimal case : all candies are unique
    if( s.size > candyType.length / 2)
        return candyType.length / 2 
    // not optimal, she tries all candies
    else
        return s.size
};
// @lc code=end

