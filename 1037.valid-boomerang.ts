/*
 * @lc app=leetcode id=1037 lang=typescript
 *
 * [1037] Valid Boomerang
 */

// @lc code=start
function isBoomerang(points: number[][]): boolean {
    // Distinct ?
    if (
        (points[0][0] === points[1][0] && points[0][1] === points[1][1]) ||
        (points[0][0] === points[2][0] && points[0][1] === points[2][1]) ||
        (points[1][0] === points[2][0] && points[1][1] === points[2][1])
    ) 
        return false;
    
    // Not a straight line
    return (
        points[0][0] * (points[1][1] - points[2][1]) +
        points[1][0] * (points[2][1] - points[0][1]) +
        points[2][0] * (points[0][1] - points[1][1])
    ) != 0;
};
// @lc code=end

