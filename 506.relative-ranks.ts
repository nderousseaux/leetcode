/*
 * @lc app=leetcode id=506 lang=typescript
 *
 * [506] Relative Ranks
 */

// @lc code=start
function findRelativeRanks(score: number[]): string[] {
	const rankMap = new Map<number, string>();

	const sortedScores = [...score].sort((a, b) => b - a);

	for (let i = 0; i < sortedScores.length; i++) {
		if (i === 0) {
			rankMap.set(sortedScores[i], "Gold Medal");
		} else if (i === 1) {
			rankMap.set(sortedScores[i], "Silver Medal");
		} else if (i === 2) {
			rankMap.set(sortedScores[i], "Bronze Medal");
		} else {
			rankMap.set(sortedScores[i], (i + 1).toString());
		}
	}

	return score.map(s => rankMap.get(s) || "");
};
// @lc code=end

