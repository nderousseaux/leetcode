/*
 * @lc app=leetcode id=136 lang=typescript
 *
 * [136] Single Number
 */

// @lc code=start
function singleNumber(nums: number[]): number {
	// Tabs wich store all the numbers that appear only once
	const tabs = new Set<number>();

	for (let i = 0; i < nums.length; i++) {
		if (tabs.has(nums[i])) {
			tabs.delete(nums[i]);
		} else {
			tabs.add(nums[i]);
		}
	}

	return tabs.values().next().value;
    
};
// @lc code=end

