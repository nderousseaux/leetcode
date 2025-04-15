/*
 * @lc app=leetcode id=434 lang=typescript
 *
 * [434] Number of Segments in a String
 */

// @lc code=start
function countSegments(s: string): number {
		// Split the string by spaces and filter out empty strings
		return s.split(' ').filter(segment => segment.length > 0).length;
};
// @lc code=end

