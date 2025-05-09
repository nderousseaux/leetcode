/*
 * @lc app=leetcode id=507 lang=typescript
 *
 * [507] Perfect Number
 */

// @lc code=start
function checkPerfectNumber(num: number): boolean {
	let divisors: number[] = [];
	let sum: number = 0;
	
	// Get all divisor of num
	for(let i = 1; i<=num/2; i++){
		if (num % i == 0) {
			divisors.push(i);
			sum += i
			//If the sum is already greater than the num -> false
			if(sum > num) return false
		}
	}

	return sum === num ? true : false;
};
// @lc code=end

