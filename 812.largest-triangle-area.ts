/*
 * @lc app=leetcode id=812 lang=typescript
 *
 * [812] Largest Triangle Area
 */

// @lc code=start
function largestTriangleArea(points: number[][]): number {
    let res = 0
    for(let i = 0; i < points.length; i++){
        for(let j = i+1; j < points.length; j++){
            for(let k = j+1; k < points.length; k++){
                let inter = Math.abs(0.5 * (points[i][0] * (points[j][1] - points[k][1]) + points[j][0] * (points[k][1] - points[i][1]) + points[k][0] * (points[i][1] - points[j][1])))
                res = inter > res ? inter : res
            }
        }

    }
    return res
};
// @lc code=end

