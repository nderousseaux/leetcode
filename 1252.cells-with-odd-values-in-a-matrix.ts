/*
 * @lc app=leetcode id=1252 lang=typescript
 *
 * [1252] Cells with Odd Values in a Matrix
 */

// @lc code=start
function oddCells(m: number, n: number, indices: number[][]): number {
    // Init matrice
    let mat: number[][] = Array.from({ length: m }, () => Array(n).fill(0));
    
    // Increment
    for (let i = 0; i < indices.length; i++) {
        const [row, col] = indices[i];
        // Increment all cells in the given row
        for (let c = 0; c < n; c++) {
            mat[row][c]++;
        }
        // Increment all cells in the given column
        for (let r = 0; r < m; r++) {
            mat[r][col]++;
        }
    }
    
    // Count odd values
    let res = 0;
    for(let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++)
            if (mat[i][j] % 2 == 1) res++
    }

    return res    
};
// @lc code=end

