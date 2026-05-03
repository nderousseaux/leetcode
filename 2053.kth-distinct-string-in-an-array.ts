/*
 * @lc app=leetcode id=2053 lang=typescript
 *
 * [2053] Kth Distinct String in an Array
 */

// @lc code=start
function kthDistinct(arr: string[], k: number): string {
    let distincts: string[] = []
    for(let i = 0; i < arr.length; i++) {
        if(
            !arr.slice(0, i)
                .concat(arr.slice(i+1, arr.length))
                .includes(arr[i])
        ) {
            distincts.push(arr[i]);
        }
    }
    return distincts[k-1] || "";
};
// @lc code=end

