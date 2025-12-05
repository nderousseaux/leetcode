/*
 * @lc app=leetcode id=1779 lang=typescript
 *
 * [1779] Find Nearest Point That Has the Same X or Y Coordinate
 */

// @lc code=start
function nearestValidPoint(x: number, y: number, points: number[][]): number {
    let res: number = -1
    let smaller: number = Number.MAX_VALUE;

    for(let i = 0; i < points.length; i++) {
        let p: number[] = points[i];
        // If valid
        if (p[0] == x || p[1] == y){
            let dist: number = Math.abs(x-p[0])+ Math.abs(y-p[1]);
            // If smaller than previous
            if (smaller > dist){
                smaller = dist;
                res = i;
            }
        }
    }
    return res;
};
// @lc code=end

