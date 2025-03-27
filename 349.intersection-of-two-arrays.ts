/*
 * @lc app=leetcode id=349 lang=typescript
 *
 * [349] Intersection of Two Arrays
 */

// @lc code=start
function intersection(nums1: number[], nums2: number[]): number[] {
		let set1 = new Set(nums1);
		let set2 = new Set(nums2);
		let result = [];
		for (let num of set1) {
				if (set2.has(num)) {
						result.push(num);
				}
		}
		return result;
};
// @lc code=end

