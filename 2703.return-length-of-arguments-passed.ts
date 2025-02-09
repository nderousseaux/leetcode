/*
 * @lc app=leetcode id=2703 lang=typescript
 *
 * [2703] Return Length of Arguments Passed
 */

// @lc code=start
/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
var argumentsLength = function(...args) {
	return args.length;
};

/**
 * argumentsLength(1, 2, 3); // 3
 */

// @lc code=end

