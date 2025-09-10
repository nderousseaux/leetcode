/*
 * @lc app=leetcode id=1154 lang=typescript
 *
 * [1154] Day of the Year
 */

// @lc code=start
function dayOfYear(date: string): number {
    let d: Date = new Date(date);
    let firstDay: Date = new Date(d.getFullYear(), 0, 0);
    return (d.getTime() - firstDay.getTime()) / (24 * 60 * 60 * 1000);
};
// @lc code=end

