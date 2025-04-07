/*
 * @lc app=leetcode id=409 lang=typescript
 *
 * [409] Longest Palindrome
 */

// @lc code=start
function longestPalindrome(s: string): number {
		const charCount: { [key: string]: number } = {};
		let length = 0;
		let hasOddCount = false;

		for (const char of s) {
				charCount[char] = (charCount[char] || 0) + 1;
		}

		for (const count of Object.values(charCount)) {
				if (count % 2 === 0) {
						length += count;
				} else {
						length += count - 1;
						hasOddCount = true;
				}
		}

		return hasOddCount ? length + 1 : length;
};
// @lc code=end

