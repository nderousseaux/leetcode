/*
 * @lc app=leetcode id=3354 lang=typescript
 *
 * [3354] Make Array Elements Equal to Zero
 */

// @lc code=start
function countValidSelections(nums: number[]): number {
  function isValidSelection(nums: number[], curr: number, isLeft: boolean): boolean {
    if (nums[curr] != 0) return false;

    while (curr >= 0 && curr <= nums.length - 1) {
      curr += isLeft ? -1 : 1
      if (nums[curr] > 0) {
        nums[curr] -= 1;
        isLeft = !isLeft;
      }
    }

    return (new Set(nums)).size == 1 && nums[0] == 0;
  }

  let res: number = 0;
  for (let i = 0; i < nums.length; i++) {
    res += isValidSelection([...nums], i, true) ? 1 : 0
    res += isValidSelection([...nums], i, false) ? 1 : 0
  }

  return res;
};
// @lc code=end
