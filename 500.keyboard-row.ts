/*
 * @lc app=leetcode id=500 lang=typescript
 *
 * [500] Keyboard Row
 */

// @lc code=start
function findWords(words: string[]): string[] {
	let res: string[] = []
	const rows = [
		new Set('qwertyuiop'),
		new Set('asdfghjkl'),
		new Set('zxcvbnm')
	];

	for (let w of words){
		if(rows.some(row => [...w.toLowerCase()].every(char => row.has(char))))
			res.push(w);
	}
	return res;
};
// @lc code=end

