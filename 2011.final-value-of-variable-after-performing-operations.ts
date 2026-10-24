/*
 * @lc app=leetcode id=2011 lang=typescript
 *
 * [2011] Final Value of Variable After Performing Operations
 */

// @lc code=start
function finalValueAfterOperations(operations: string[]): number {
    let res = 0;

    for(let str of operations) {
        if (str == "X++" || str == "++X")
            res+= 1
        if (str == "X--" || str == "--X")
            res-= 1
    }

    return res;
};
// @lc code=end

