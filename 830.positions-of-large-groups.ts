/*
 * @lc app=leetcode id=830 lang=typescript
 *
 * [830] Positions of Large Groups
 */

// @lc code=start
function largeGroupPositions(s: string): number[][] {
    let res: number[][] = [];

    let i_current = 0;
    let char_current = s[0];

    for(let i = 1; i < s.length; i++) {
        let c = s[i];
        if (c != char_current) {
            res.push([i_current, i-1]);
            i_current = i;
            char_current = c;
        }
    }
    res.push([i_current, s.length-1]);
    return res.filter((g) => g[1]-g[0] > 1);
};
// @lc code=end

