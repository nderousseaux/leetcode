/*
 * @lc app=leetcode id=415 lang=typescript
 *
 * [415] Add Strings
 */

// @lc code=start
function addStrings(num1: string, num2: string): string {
		let carry = 0;
		let result = '';
		let i = num1.length - 1;
		let j = num2.length - 1;

		while (i >= 0 || j >= 0 || carry > 0) {
				const digit1 = i >= 0 ? num1.charCodeAt(i) - '0'.charCodeAt(0) : 0;
				const digit2 = j >= 0 ? num2.charCodeAt(j) - '0'.charCodeAt(0) : 0;

				const sum = digit1 + digit2 + carry;
				carry = Math.floor(sum / 10);
				result = String.fromCharCode('0'.charCodeAt(0) + (sum % 10)) + result;

				i--;
				j--;
		}

		return result;
};
// @lc code=end

