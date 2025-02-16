/*
 * @lc app=leetcode id=69 lang=typescript
 *
 * [69] Sqrt(x)
 */

// @lc code=start
function mySqrt(x: number): number {
	if (x === 0) return 0;
	if (x === 1) return 1;

	for (let i = 1; i <= x; i++) {
		if (i * i > x) {
			return i - 1;
		}
	}
	
};
// @lc code=end

