/*
 * @lc app=leetcode id=405 lang=typescript
 *
 * [405] Convert a Number to Hexadecimal
 */

// @lc code=start
function toHex(num: number): string {
		if (num === 0) return '0';
		const hexChars = '0123456789abcdef';
		let hex = '';
		for (let i = 7; i >= 0; i--) {
				const hexDigit = (num >> (i * 4)) & 0xf;
				if (hex || hexDigit) {
						hex += hexChars[hexDigit];
				}
		}
		return hex;
};
// @lc code=end

