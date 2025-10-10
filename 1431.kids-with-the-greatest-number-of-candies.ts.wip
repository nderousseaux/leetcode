/*
 * @lc app=leetcode id=1431 lang=typescript
 *
 * [1431] Kids With the Greatest Number of Candies
 */

// @lc code=start
function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
    let res: boolean[] = [];
    let max: number = Math.max(...candies);
    
    for(let i = 0; i < candies.length; i++)
        res.push(candies[i] + extraCandies >= max)

    return res;
};
// @lc code=end

