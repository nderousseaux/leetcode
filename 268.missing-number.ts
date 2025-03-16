/*
 * @lc app=leetcode id=268 lang=typescript
 *
 * [268] Missing Number
 */

// @lc code=start
function missingNumber(nums: number[]): number {
	const n = nums.length;
	const sum = nums.reduce((acc, cur) => acc + cur, 0);
	return n * (n + 1) / 2 - sum;
};
// @lc code=end

