/*
 * @lc app=leetcode id=70 lang=typescript
 *
 * [70] Climbing Stairs
 */

// @lc code=start
function climbStairs(n: number): number {
	if (n <= 0) return 0;
	if (n === 1) return 1;
	if (n === 2) return 2;
	
	let one = 2;
	let two = 1;
	let all = 0;

	for( let i=2; i<n; i++ ) {
		all = one + two;
		two = one;
		one = all;
	}

	return all;

};
// @lc code=end
