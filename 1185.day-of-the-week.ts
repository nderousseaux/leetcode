/*
 * @lc app=leetcode id=1185 lang=typescript
 *
 * [1185] Day of the Week
 */

// @lc code=start
function dayOfTheWeek(day: number, month: number, year: number): string {
    let days: string[] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return days[new  Date(`${year}-${month}-${day}`).getDay()]
    
};
// @lc code=end

