/*
 * @lc app=leetcode id=459 lang=typescript
 *
 * [459] Repeated Substring Pattern
 */

// @lc code=start
function repeatedSubstringPattern(s: string): boolean {
		const n = s.length;
		if (n < 2) return false;

		for (let i = 1; i <= n / 2; i++) {
				if (n % i === 0) {
						const repeatCount = n / i;
						const substring = s.slice(0, i);
						let repeatedString = '';
						for (let j = 0; j < repeatCount; j++) {
								repeatedString += substring;
						}
						if (repeatedString === s) {
								return true;
						}
				}
		}

		return false;
};
// @lc code=end

