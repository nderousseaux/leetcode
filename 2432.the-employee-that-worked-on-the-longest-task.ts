/*
 * @lc app=leetcode id=2432 lang=typescript
 *
 * [2432] The Employee That Worked on the Longest Task
 */

// @lc code=start
function hardestWorker(n: number, logs: number[][]): number {
  let maxTime = 0;
  let maxEmployee = 0;
  let prevTime = 0;

  for (let [employee, time] of logs) {
    const duration = time - prevTime;
    if (duration > maxTime) {
      maxTime = duration;
      maxEmployee = employee;
    }
    prevTime = time;
  }

  return maxEmployee;
};
// @lc code=end
