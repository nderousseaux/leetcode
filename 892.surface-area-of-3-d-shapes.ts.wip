/*
 * @lc app=leetcode id=892 lang=typescript
 *
 * [892] Surface Area of 3D Shapes
 */

// @lc code=start
function surfaceArea(grid: number[][]): number {
    let res = 0
    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid[0].length; j++){
            if (grid[i][j] == 0) continue;
            res += 2 // Top and bottom face
            
            // For each of four faces
            for(const [k, l] of [[i-1,j], [i+1,j], [i,j-1], [i,j+1]]) {

                // If this is exterior faces
                if (k < 0 || k >= grid.length || l < 0 || l >= grid[0].length)
                    res+=grid[i][j]

                // If it's interior face
                else {
                    let diff = grid[i][j] - grid[k][l]
                    res +=  diff > 0 ? diff : 0
                }
            }
           
        }
    }
    return res;
};
// @lc code=end

