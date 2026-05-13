/*
 * @lc app=leetcode id=2644 lang=typescript
 *
 * [2644] Find the Maximum Divisibility Score
 */

// @lc code=start
function maxDivScore(nums: number[], divisors: number[]): number {
  let scores: number[] = divisors.map(d => {
    return nums.filter(n => n % d == 0).length;
  })
  let res: number = 0
  for (let i = 1; i < divisors.length; i++)
    if (
      scores[i] > scores[res] ||
      ((scores[i] == scores[res] && divisors[i] < divisors[res]))
    )
      res = i;
  return divisors[res];
};
// @lc code=end
