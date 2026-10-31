/*
 * @lc app=leetcode id=3386 lang=typescript
 *
 * [3386] Button with Longest Push Time
 */

// @lc code=start
function buttonWithLongestTime(events: number[][]): number {
  let [minIndex, maxTime]: number[] = events[0];

  for (let i = 1; i < events.length; i++) {
    const time: number = events[i][1] - events[i - 1][1];
    if (time > maxTime || (time == maxTime && events[i][0] < minIndex)) {
      maxTime = time
      minIndex = events[i][0]
    }
  }

  return minIndex;
};
// @lc code=end
