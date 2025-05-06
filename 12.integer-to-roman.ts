/*
 * @lc app=leetcode id=12 lang=typescript
 *
 * [12] Integer to Roman
 */

// @lc code=start
function intToRoman(num: number): string {
	const romanMap: { [key: number]: string } = {
		1000: 'M',
		900: 'CM',
		500: 'D',
		400: 'CD',
		100: 'C',
		90: 'XC',
		50: 'L',
		40: 'XL',
		10: 'X',
		9: 'IX',
		5: 'V',
		4: 'IV',
		1: 'I',
	};

	let res: string = ''

	// For each symbol (decreasing value)
	for (const value of Object.keys(romanMap).map(Number).sort((a, b) => b - a)) {
		while(num - value >= 0){
			num -= value;
			res += romanMap[value]	
		}
	}
	return res;
}
// @lc code=end

