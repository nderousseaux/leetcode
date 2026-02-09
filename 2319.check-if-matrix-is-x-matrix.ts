/*
 * @lc app=leetcode id=2319 lang=typescript
 *
 * [2319] Check if Matrix Is X-Matrix
 */

// @lc code=start
function checkXMatrix(grid: number[][]): boolean {
    for(let i = 0; i < grid.length; i++) {
        for(let j = 0; j < grid.length; j++) {
            const isDiag: boolean = j == i || j == grid.length - i - 1;

            if (isDiag ? grid[i][j] == 0 : grid[i][j] != 0)
                return false;
        }
    }
    return true;
};
// @lc code=end

