/*
 * @lc app=leetcode id=1332 lang=typescript
 *
 * [1332] Remove Palindromic Subsequences
 */

// @lc code=start
function removePalindromeSub(s: string): number {
    // Case 1 : res = 0
    if (s.length == 0) return 0
    // Case 2 : already a palindrome : res = 1
    if (s.split("").reverse().join("") === s) return 1
    // Case 3 : res = 2
    return 2
};
// @lc code=end

