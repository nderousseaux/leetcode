/*
 * @lc app=leetcode id=434 lang=typescript
 *
 * [434] Number of Segments in a String
 */

// @lc code=start
function countSegments(s: string): number {
		// Split the string by spaces and filter out empty segments
		const segments = s.split(' ').filter(segment => segment.length > 0);
		// Return the count of non-empty segments
		return segments.length;
};
// @lc code=end

