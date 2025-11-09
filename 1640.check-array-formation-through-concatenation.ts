/*
 * @lc app=leetcode id=1640 lang=typescript
 *
 * [1640] Check Array Formation Through Concatenation
 */

// @lc code=start
function canFormArray(arr: number[], pieces: number[][]): boolean {
    let pointer = 0
    while (pointer < arr.length) {
        // Select the right piece
        let piece = pieces.find(a => a[0] == arr[pointer])
        if (!piece) return false;
        pointer++;

        // Check if the piece fit
        for (let i = 1; i < piece.length; i++) {
            if (piece[i] != arr[pointer]) return false
            pointer++;
        }
    }
    return true;
};
// @lc code=end

