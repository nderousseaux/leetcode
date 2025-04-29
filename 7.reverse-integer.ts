/*
 * @lc app=leetcode id=7 lang=typescript
 *
 * [7] Reverse Integer
 */

// @lc code=start
function reverse(x: number): number {
	let res: number = 0;
	
	if (x >= 0) {
		res = parseInt(String(x).split('').reverse().join(''))
	} else {		
		res = parseInt(String(x).slice(1).split('').reverse().join('')) * -1;
	}

	if( res > 2**31 || res < -(2**31))
		return 0
	
	return res	
};
// @lc code=end

