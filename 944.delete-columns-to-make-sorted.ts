/*
 * @lc app=leetcode id=944 lang=typescript
 *
 * [944] Delete Columns to Make Sorted
 */

// @lc code=start
function minDeletionSize(strs: string[]): number {
    let res = 0;
    for (let i = 0; i < strs[0].length; i++){
        for(let j = 1; j < strs.length; j++){
            if (strs[j-1].charAt(i) > strs[j].charAt(i)){
                // Check if is lexicographic order
                res++;
                break;
            }
        }
    }
    return res;
};
// @lc code=end

