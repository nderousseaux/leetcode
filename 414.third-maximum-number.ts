/*
 * @lc app=leetcode id=414 lang=typescript
 *
 * [414] Third Maximum Number
 */

// @lc code=start
function thirdMax(nums: number[]): number {
		const uniqueNums = Array.from(new Set(nums));
		uniqueNums.sort((a, b) => b - a);
		
		return uniqueNums.length >= 3 ? uniqueNums[2] : uniqueNums[0];
};
// @lc code=end

