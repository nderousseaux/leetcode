/*
 * @lc app=leetcode id=1886 lang=typescript
 *
 * [1886] Determine Whether Matrix Can Be Obtained By Rotation
 */

// @lc code=start
function findRotation(mat: number[][], target: number[][]): boolean {

    function isEqual(m1: number[][], m2: number[][]): boolean {
        for(let i = 0; i < m1.length; i++) {
            for(let j = 0; j < m1[0].length; j++)
                if (m1[i][j] != m2[i][j]) return false
        }
        return true
    }

    function rotate(m: number[][]): number[][] {
        return m[0].map((val, index) => m.map(row => row[index]).reverse())
    }
    
    for(let i = 0; i < 4; i++) {
        if (isEqual(mat, target))
            return true;
        mat = rotate(mat);
    }

    return false;
};
// @lc code=end

