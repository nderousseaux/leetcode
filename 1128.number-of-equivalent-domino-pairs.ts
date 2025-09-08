/*
 * @lc app=leetcode id=1128 lang=typescript
 *
 * [1128] Number of Equivalent Domino Pairs
 */

// @lc code=start
function numEquivDominoPairs(dominoes: number[][]): number {
    // Step 1, order all dominos
    dominoes = dominoes.map((pair) => [Math.min(pair[0], pair[1]), Math.max(pair[0], pair[1])]);
    
    // Step 2, count equivalent pairs
    const count: Record<string, number> = {};
    let result = 0;
    for (const pair of dominoes) {
        const key = pair.join(',');
        if (count[key]) {
            result += count[key];
            count[key]++;
        } else {
            count[key] = 1;
        }
    }
    return result;
};
// @lc code=end

