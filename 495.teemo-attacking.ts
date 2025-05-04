/*
 * @lc app=leetcode id=495 lang=typescript
 *
 * [495] Teemo Attacking
 */

// @lc code=start
function findPoisonedDuration(timeSeries: number[], duration: number): number {
	let res = 0;

	for (let i = 0; i < timeSeries.length-1; i++) {
		res += Math.min(timeSeries[i+1] - timeSeries[i], duration)
	}
	return res + duration
};
// @lc code=end

