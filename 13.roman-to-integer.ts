/*
 * @lc app=leetcode id=13 lang=typescript
 *
 * [13] Roman to Integer
 */

// @lc code=start
let values: { [key: string]: number } = {
		"I": 1,
		"V": 5,
		"X": 10,
		"L": 50,
		"C": 100,
		"D": 500,
		"M": 1000
};

function romanToInt(s: string): number {
	let result: number = 0;

	// Convert string to array of numbers
	let array: string[] = s.split("");
	let arrayInt: number[] = array.map((value) => {
		return values[value];
	});
	
	// Iterate through the array
	arrayInt.forEach((value, index) => {
		// If the next value is greater than the current value, subtract the current value
		if (arrayInt[index + 1] > value) {
			result -= value;
		} else {
			result += value;
		}
	});

	return result;
	
};
// @lc code=end

