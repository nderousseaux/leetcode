/*
 * @lc app=leetcode id=1089 lang=typescript
 *
 * [1089] Duplicate Zeros
 */

// @lc code=start
/**
 Do not return anything, modify arr in-place instead.
 */
function duplicateZeros(arr: number[]): void {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 0) {
            arr.splice(i + 1, 0, 0);
            arr.pop();
            i++; // Skip the newly inserted zero
        }
    }

    return;
};
// @lc code=end

