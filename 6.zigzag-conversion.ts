/*
 * @lc app=leetcode id=6 lang=typescript
 *
 * [6] Zigzag Conversion
 */

// @lc code=start
function convert(s: string, numRows: number): string {
	let res: string[] = new Array(numRows).fill("");

	let row = 0;
	let isIncreasing = true;
	for(let letter of s){
		res[row] += letter;

		// When it's only one row, no changing of row 
		if(numRows == 1) continue;

		if(row == numRows-1) //When we're at the bottom of zigzag, we go up
			isIncreasing = false
		if(row == 0) //When we're at the top, we go down
			isIncreasing = true

		isIncreasing ? row++ : row-- 		
	}
	return res.join("");
};
// @lc code=end

