/*
 * @lc app=leetcode id=125 lang=typescript
 *
 * [125] Valid Palindrome
 */

// @lc code=start
function isPalindrome(s: string): boolean {
	// remove all non-alphanumeric characters
	const cleaned = s.replace(/[^0-9a-z]/gi, '').toLowerCase();

	// check if the cleaned string is a palindrome
	return cleaned === cleaned.split('').reverse().join('');
    
};
// @lc code=end

