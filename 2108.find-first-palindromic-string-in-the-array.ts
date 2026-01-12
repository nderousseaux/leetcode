/*
 * @lc app=leetcode id=2108 lang=typescript
 *
 * [2108] Find First Palindromic String in the Array
 */

// @lc code=start
function firstPalindrome(words: string[]): string {
    function isPalindrome(word: string): boolean {
        return word == word.split("").reverse().join('');
    }
    for(let w of words)
        if (isPalindrome(w)) return w;
    return "";
};
// @lc code=end

