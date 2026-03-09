/*
 * @lc app=leetcode id=2432 lang=typescript
 *
 * [2432] The Employee That Worked on the Longest Task
 */

// @lc code=start

function hardestWorker(n: number, logs: number[][]): number {
  let maxDuration = 0;
  let employeeId = Number.MAX_VALUE;
  let previousEndTime = 0;

  for (let i = 0; i < logs.length; i++) {
    const id = logs[i][0];
    const leaveTime = logs[i][1];
    const duration = leaveTime - previousEndTime;

    if (duration > maxDuration) {
      maxDuration = duration;
      employeeId = id;
    } else if (duration === maxDuration && id < employeeId) {
      employeeId = id;
    }

    previousEndTime = leaveTime;
  }

  return employeeId;
}
// @lc code=end
