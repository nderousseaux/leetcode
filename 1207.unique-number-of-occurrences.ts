/*
 * @lc app=leetcode id=1207 lang=typescript
 *
 * [1207] Unique Number of Occurrences
 */

// @lc code=start
function uniqueOccurrences(arr: number[]): boolean {
    let list: { [key: number]: number } = {}
    for (let i = 0; i < arr.length; i++) {
        if (!list[arr[i]]) {
            list[arr[i]] = 0;
        }
        list[arr[i]] += 1;

    }
    
    //Get list of number of occurence
    let occ = Object.values(list)
    return occ.length == (new Set(occ)).size
};
// @lc code=end

