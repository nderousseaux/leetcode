/*
 * @lc app=leetcode id=1422 lang=typescript
 *
 * [1422] Maximum Score After Splitting a String
 */

// @lc code=start
function maxScore(s: string): number {
    let res: number = 0;

    for(let i = 1; i< s.length; i++)
        res = Math.max(res,
            s.split("").reduce((a, c, j) => {
                if ((j < i && c === "0") || (j >= i && c === "1"))
                    return a + 1;
                return a;
            }, 0)
        )

    return res;
    
};
// @lc code=end

