/*
 * @lc app=leetcode id=1260 lang=typescript
 *
 * [1260] Shift 2D Grid
 */

// @lc code=start
function shiftGrid(grid: number[][], k: number): number[][] {
    const m = grid.length;
    const n = grid[0].length;
    const res: number[][] = Array(m).fill(0).map(() => Array(n).fill(0));
    
    k = k % (m * n); // Optimize k to avoid unnecessary full cycles
    
    for(let i = 0; i < m; i++){
        for(let j = 0; j < n; j++){
            // Convert 2D position to 1D index
            const currentPos = i * n + j;
            // Calculate new position after k shifts
            const newPos = (currentPos + k) % (m * n);
            // Convert back to 2D coordinates
            const newI = Math.floor(newPos / n);
            const newJ = newPos % n;
            
            res[newI][newJ] = grid[i][j];
        }
    }
    
    return res;
};
// @lc code=end

