/*
 * @lc app=leetcode id=28 lang=typescript
 *
 * [28] Find the Index of the First Occurrence in a String
 */

// @lc code=start
function strStr(haystack: string, needle: string): number {
    let res = -1;
		for (let i = 0; i < haystack.length; i++) {
			if (haystack.slice(i, i + needle.length) === needle) {
				res = i;
				break;
			}
		}
		return res;
};
// @lc code=end

