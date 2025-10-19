/*
 * @lc app=leetcode id=1491 lang=typescript
 *
 * [1491] Average Salary Excluding the Minimum and Maximum Salary
 */

// @lc code=start
function average(salary: number[]): number {
    return salary
        .sort((a, b) => a - b)
        .slice(1, salary.length - 1)
        .reduce((a, c) => a + c, 0) / (salary.length - 2);
};
// @lc code=end

