/*
 * @lc app=leetcode id=766 lang=typescript
 *
 * [766] Toeplitz Matrix
 */

// @lc code=start
function isToeplitzMatrix(matrix: number[][]): boolean {
    for(let i = 1; i < matrix.length; i++){
        for(let j = 1; j < matrix[0].length; j++)
            if (matrix[i][j] != matrix[i-1][j-1]) return false;
    }
    return true;
};
// @lc code=end

