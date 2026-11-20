/*
 * @lc app=leetcode id=3633 lang=typescript
 *
 * [3633] Earliest Finish Time for Land and Water Rides I
 */

// @lc code=start
function earliestFinishTime(landStartTime: number[], landDuration: number[], waterStartTime: number[], waterDuration: number[]): number {
  let res = Infinity;
  let duration;

  for (let i = 0; i < landStartTime.length; i++) {
    for (let j = 0; j < waterStartTime.length; j++) {
      duration = landStartTime[i] + landDuration[i]
      duration = Math.max(duration, waterStartTime[j]) + waterDuration[j]
      res = Math.min(res, duration)

      duration = waterStartTime[j] + waterDuration[j]
      duration = Math.max(duration, landStartTime[i]) + landDuration[i]
      res = Math.min(res, duration)
    }
  }

  return res;
};
// @lc code=end
