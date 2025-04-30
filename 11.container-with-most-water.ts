/*
 * @lc app=leetcode id=11 lang=typescript
 *
 * [11] Container With Most Water
 */

// @lc code=start
function maxArea(height: number[]): number {
	let res = 0;

	let i = 0; // Left pointer
	let j = height.length - 1; // Right pointer
	
	while (i < j) {
		res = Math.max(res,
			Math.min(height[i], height[j]) * (j - i)
		)

		// Moving pointer (we move the smaller height)
		if(height[i] < height[j]) { 
			i++;
		} else {
			j--;
		}
	}

	return res;
}
// @lc code=end

