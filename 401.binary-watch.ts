/*
 * @lc app=leetcode id=401 lang=typescript
 *
 * [401] Binary Watch
 */

// @lc code=start
function readBinaryWatch(turnedOn: number): string[] {
	const result: string[] = [];
	for (let i = 0; i < 12; i++) {
		for (let j = 0; j < 60; j++) {
			if (i.toString(2).split('0').join('').length + j.toString(2).split('0').join('').length === turnedOn) {
				result.push(`${i}:${j < 10 ? '0' + j : j}`);
			}
		}
	}
	return result;
};
// @lc code=end

