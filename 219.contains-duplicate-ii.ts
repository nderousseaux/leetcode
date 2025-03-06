/*
 * @lc app=leetcode id=219 lang=typescript
 *
 * [219] Contains Duplicate II
 */

// @lc code=start
function containsNearbyDuplicate(nums: number[], k: number): boolean {
	let map = new Map<number, number>();
	for (let i = 0; i < nums.length; i++) {
		let num = nums[i];
		if (map.has(num) && i - map.get(num) <= k) return true;
		map.set(num, i);
	}
	return false;
    
};
// @lc code=end

