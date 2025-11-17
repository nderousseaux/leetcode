/*
 * @lc app=leetcode id=1688 lang=typescript
 *
 * [1688] Count of Matches in Tournament
 */

// @lc code=start
function numberOfMatches(n: number): number {
    let res: number = 0;
    let i = 0;
    // Recursive function for each round
    function oneRound(nRound: number) {
        if (nRound == 1) return null;
        if (nRound % 2 == 0) {
            res += nRound/2
            oneRound(nRound/2)
        }
        else {
            res += (nRound-1) / 2
            oneRound((nRound-1) / 2 + 1)
        }
    }
    oneRound(n);

    return res;
};
// @lc code=end

