/*
 * @lc app=leetcode id=367 lang=typescript
 *
 * [367] Valid Perfect Square
 */

// @lc code=start
function isPerfectSquare(num: number): boolean {
	if (num < 0) return false;
	if (num === 0 || num === 1) return true;

	let left = 2;
	let right = Math.floor(num / 2);

	while (left <= right) {
		const mid = Math.floor((left + right) / 2);
		const square = mid * mid;

		if (square === num) {
			return true;
		} else if (square < num) {
			left = mid + 1;
		} else {
			right = mid - 1;
		}
	}

	return false;
};
// @lc code=end

