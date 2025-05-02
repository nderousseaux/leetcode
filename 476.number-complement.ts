/*
 * @lc app=leetcode id=476 lang=typescript
 *
 * [476] Number Complement
 */

// @lc code=start
function findComplement(num: number): number {
		let mask = 1;
		while (mask < num) {
				mask = (mask << 1) | 1;
		}
		return num ^ mask;
};
// @lc code=end

