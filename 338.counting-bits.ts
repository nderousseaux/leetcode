/*
 * @lc app=leetcode id=338 lang=typescript
 *
 * [338] Counting Bits
 */

// @lc code=start
function countBits(n: number): number[] {
  const dp = new Array(n + 1).fill(0);
	for (let i = 1; i <= n; i++) {
		dp[i] = dp[i >> 1] + (i & 1);
	}
	return dp;
};
// @lc code=end

