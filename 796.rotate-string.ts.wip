/*
 * @lc app=leetcode id=796 lang=typescript
 *
 * [796] Rotate String
 */

// @lc code=start
function rotateString(s: string, goal: string): boolean {
    let i = 0;
    while(i < s.length){
        let new_str = s.slice(i, s.length) + s.slice(0, i)
        if (new_str === goal)
            return true

        i++
    }
    return false
    
};
// @lc code=end

