/*
 * @lc app=leetcode id=482 lang=typescript
 *
 * [482] License Key Formatting
 */

// @lc code=start
function licenseKeyFormatting(s: string, k: number): string {
    let res = s.split('-').join("").toUpperCase()
		let length = res.length

		for (let i = length - k; i > 0; i -= k)
			res = res.slice(0, i) + '-' + res.slice(i)			

		return res
};
// @lc code=end

