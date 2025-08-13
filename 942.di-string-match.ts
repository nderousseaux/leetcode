/*
 * @lc app=leetcode id=942 lang=typescript
 *
 * [942] DI String Match
 */

// @lc code=start
function diStringMatch(s: string): number[] {
    let low = 0;
    let high = s.length;
    let res: number[] = [];
    
    for(let i = 0; i < s.length; i++){
        if(s[i] === 'I'){
            res.push(low++);
        } else {
            res.push(high--);
        }
    }
    res.push(low);
    return res;
    
};
// @lc code=end

