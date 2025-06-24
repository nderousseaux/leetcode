/*
 * @lc app=leetcode id=657 lang=typescript
 *
 * [657] Robot Return to Origin
 */

// @lc code=start
function judgeCircle(moves: string): boolean {    
    return (
        (
            [...moves].filter(x => x == "L").length == 
            [...moves].filter(x => x == "R").length
        ) &&
        (
            [...moves].filter(x => x == "U").length == 
            [...moves].filter(x => x == "D").length  
        )
    );
};
// @lc code=end

