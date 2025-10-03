/*
 * @lc app=leetcode id=1380 lang=typescript
 *
 * [1380] Lucky Numbers in a Matrix
 */

// @lc code=start
function luckyNumbers(matrix: number[][]): number[] {
    let res: number[] = [];

    // Step 1: get the minimum of each row and its column index
    for (let i = 0; i < matrix.length; i++) {
        let minVal = matrix[i][0];
        let minCol = 0;
        for (let j = 1; j < matrix[i].length; j++) {
            if (matrix[i][j] < minVal) {
                minVal = matrix[i][j];
                minCol = j;
            }
        }
        // Step 2: check if this minVal is the maximum in its column
        let isLucky = true;
        for (let k = 0; k < matrix.length; k++) {
            if (matrix[k][minCol] > minVal) {
                isLucky = false;
                break;
            }
        }
        if (isLucky) {
            res.push(minVal);
        }
    }


    return res;
};
// @lc code=end

