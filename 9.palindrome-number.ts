/*
 * @lc app=leetcode id=9 lang=typescript
 *
 * [9] Palindrome Number
 */

// @lc code=start
function isPalindrome(x: number): boolean {
	let y = x.toString().split('').reverse().join('');
	return x.toString() === y;
};
// @lc code=end

