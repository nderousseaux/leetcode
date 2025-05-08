/*
 * @lc app=leetcode id=504 lang=typescript
 *
 * [504] Base 7
 */

// @lc code=start
function convertToBase7(num: number): string {
	let res: string = '';

	if (num === 0) return '0';

	let n: number = Math.abs(num);

	while (n > 0) {
		res = (n%7) + res;
		n = Math.floor(n/7)
	}
	return num < 0 ? '-' + res : res;
    
};
// @lc code=end

