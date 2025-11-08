/*
 * @lc app=leetcode id=1637 lang=typescript
 *
 * [1637] Widest Vertical Area Between Two Points Containing No Points
 */

// @lc code=start
function maxWidthOfVerticalArea(points: number[][]): number {
    let res:number = 0;
    points.sort((a, b) => a[0] - b[0]);
    
    for(let i = 1; i < points.length; i++) {
        res = Math.max(res, points[i][0] - points[i-1][0]);
    }
    return res;
};
// @lc code=end

