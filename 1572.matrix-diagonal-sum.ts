/*
 * @lc app=leetcode id=1572 lang=typescript
 *
 * [1572] Matrix Diagonal Sum
 */

// @lc code=start
function diagonalSum(mat: number[][]): number {
    let res = 0;
    
    // Sum of diags
    for(let i = 0; i < mat.length; i++) { 
        res += mat[i][i];
        res += mat[i][mat.length - i - 1]
    }

    // Substract the center if added twice
    if (mat.length % 2 == 1) 
        res -= mat[Math.floor(mat.length/2)][Math.floor(mat.length/2)]

    return res;
};
// @lc code=end

