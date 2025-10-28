/*
 * @lc app=leetcode id=1566 lang=typescript
 *
 * [1566] Detect Pattern of Length M Repeated K or More Times
 */

// @lc code=start
function containsPattern(arr: number[], m: number, k: number): boolean {
    // Test each patern
    for (let i = 0; i < arr.length-m+1; i++) {
        let pattern = arr.slice(i,i+m)
        
        // Test if this patern is repeated k times
        let count = 0;
        for (let j = i; j + m <= arr.length; j += m) {
            if (arr.slice(j, j + m).join(',') === pattern.join(',')) {
            count++;
            } else {
            break;
            }
        }
        
        if (count >= k) return true;
    }

    return false
    
};
// @lc code=end

