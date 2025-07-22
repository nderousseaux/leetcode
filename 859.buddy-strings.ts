/*
 * @lc app=leetcode id=859 lang=typescript
 *
 * [859] Buddy Strings
 */

// @lc code=start
function buddyStrings(s: string, goal: string): boolean {
    if (s.length != goal.length) return false;
    
    let i_diff: number[] = [];
    // Get i when diff between s and goal
    for(let i = 0; i < s.length; i++){
        if (s.charAt(i) != goal.charAt(i))
            i_diff.push(i);
    }
    
    // If no differences, check if there are duplicate characters
    if (i_diff.length == 0) {
        let charSet = new Set(s);
        return charSet.size < s.length;
    }
    
    // If exactly 2 differences, check if swapping fixes it
    if (i_diff.length == 2) {
        return s.charAt(i_diff[0]) == goal.charAt(i_diff[1]) && 
               s.charAt(i_diff[1]) == goal.charAt(i_diff[0]);
    }
    
    return false;
};
// @lc code=end

