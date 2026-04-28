/*
 * @lc app=leetcode id=2566 lang=typescript
 *
 * [2566] Maximum Difference by Remapping a Digit
 */

// @lc code=start
function minMaxDifference(num: number): number {
  let nums: number[] = num.toString().split('').map(a => parseInt(a));

  let noZero: number = -1;
  let noNine: number = -1;

  for (let n of nums) {
    if (n != 0 && noZero == -1)
      noZero = n;
    if (n != 9 && noNine == -1)
      noNine = n;
    if (noZero > -1 && noNine > -1)
      break;
  }


  let max = Number(nums.map(num => {
    if (num == noNine) return "9";
    return num.toString();
  }).join(""));

  let min = Number(nums.map(num => {
    if (num == noZero) return "0";
    return num.toString();
  }).join(""));


  return max - min;
};

// @lc code=end
