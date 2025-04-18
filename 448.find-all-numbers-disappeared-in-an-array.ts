/*
 * @lc app=leetcode id=448 lang=typescript
 *
 * [448] Find All Numbers Disappeared in an Array
 */

// @lc code=start
function findDisappearedNumbers(nums: number[]): number[] {
		const n = nums.length;
		const result: number[] = [];

		for (let i = 0; i < n; i++) {
				const index = Math.abs(nums[i]) - 1;
				if (nums[index] > 0) {
						nums[index] = -nums[index];
				}
		}

		for (let i = 0; i < n; i++) {
				if (nums[i] > 0) {
						result.push(i + 1);
				}
		}

		return result;
};
// @lc code=end

