/*
 * @lc app=leetcode id=2027 lang=typescript
 *
 * [2027] Minimum Moves to Convert String
 */

// @lc code=start
function minimumMoves(s: string): number {
    let res: number = 0;
    let ptr: number = 0;

    while (ptr < s.length) {
        if (s[ptr] != 'X')
            ptr++;
        else if (!s.substring(ptr, ptr+1).includes('X'))
            ptr+=2;
        else if (s.substring(ptr, ptr+2).includes('X')) {
            ptr+=3;
            res+=1;
        }
    }
    return res;
};
// @lc code=end

