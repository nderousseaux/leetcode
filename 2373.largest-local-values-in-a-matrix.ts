/*
 * @lc app=leetcode id=2373 lang=typescript
 *
 * [2373] Largest Local Values in a Matrix
 */

// @lc code=start
function largestLocal(grid: number[][]): number[][] {
    let res: number[][] = [];
        for(let i = 1; i < grid.length-1; i++) {
            res.push([]);
            for(let j = 1; j < grid.length-1; j++) {
                res[i-1].push(Math.max(
                    grid[i-1][j-1],
                    grid[i-1][j],
                    grid[i-1][j+1],
                    grid[i][j-1],
                    grid[i][j],
                    grid[i][j+1],
                    grid[i+1][j-1],
                    grid[i+1][j],
                    grid[i+1][j+1],
                ))
            }
        }

    return res;
    
};
// @lc code=end

