/*
 * @lc app=leetcode id=389 lang=typescript
 *
 * [389] Find the Difference
 */

// @lc code=start
function findTheDifference(s: string, t: string): string {
		let result = 0;
		for (let i = 0; i < s.length; i++) {
				result ^= s.charCodeAt(i);
		}
		for (let i = 0; i < t.length; i++) {
				result ^= t.charCodeAt(i);
		}
		return String.fromCharCode(result);
};
// @lc code=end

