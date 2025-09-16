/*
 * @lc app=leetcode id=1232 lang=typescript
 *
 * [1232] Check If It Is a Straight Line
 */

// @lc code=start
function checkStraightLine(coordinates: number[][]): boolean {
    // If each vector are colinear : aligned
    for(let i = 0; i < coordinates.length - 2; i++) {
        const [x1, y1] = coordinates[i];
        const [x2, y2] = coordinates[i + 1];
        const [x3, y3] = coordinates[i + 2];

        const dx1 = x2 - x1, dy1 = y2 - y1;
        const dx2 = x3 - x2, dy2 = y3 - y2;

        if (dx1 * dy2 !== dy1 * dx2) return false;
    }

    return true
};
// @lc code=end

