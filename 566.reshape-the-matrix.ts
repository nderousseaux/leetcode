/*
 * @lc app=leetcode id=566 lang=typescript
 *
 * [566] Reshape the Matrix
 */

// @lc code=start
function matrixReshape(mat: number[][], r: number, c: number): number[][] {
    const m = mat.length;
    const n = mat[0].length;
    if (m * n !== r * c) return mat;

    const res: number[][] = [];
    let flat: number[] = [];

    // Flatten the matrix
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            flat.push(mat[i][j]);
        }
    }

    // Build the reshaped matrix
    for (let i = 0; i < r; i++) {
        res.push(flat.slice(i * c, (i + 1) * c));
    }

    return res;
};
// @lc code=end

