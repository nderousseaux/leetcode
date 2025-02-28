/*
 * @lc app=leetcode id=119 lang=typescript
 *
 * [119] Pascal's Triangle II
 */

// @lc code=start
function getRow(rowIndex: number): number[] {
	let result = [1];
	for (let i = 1; i <= rowIndex; i++) {
		let next = [];
		next[0] = 1;
		next[i] = 1;
		for (let j = 1; j < i; j++) {
			next[j] = result[j - 1] + result[j];
		}
		result = next;
	}
	return result;
    
};
// @lc code=end

