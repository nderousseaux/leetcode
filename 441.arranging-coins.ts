/*
 * @lc app=leetcode id=441 lang=typescript
 *
 * [441] Arranging Coins
 */

// @lc code=start
function arrangeCoins(n: number): number {
		let left = 0, right = n;
		while (left <= right) {
				const mid = Math.floor((left + right) / 2);
				const coinsNeeded = (mid * (mid + 1)) / 2;
				if (coinsNeeded === n) {
						return mid;
				} else if (coinsNeeded < n) {
						left = mid + 1;
				} else {
						right = mid - 1;
				}
		}
		return right;
};
// @lc code=end

