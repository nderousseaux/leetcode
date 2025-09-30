/*
 * @lc app=leetcode id=1360 lang=typescript
 *
 * [1360] Number of Days Between Two Dates
 */

// @lc code=start
function daysBetweenDates(date1: string, date2: string): number {
    return Math.abs(Math.ceil(
        (new Date(date2).getTime() - new Date(date1).getTime()) /
        (1000 * 3600 * 24)
    ))   
};
// @lc code=end

