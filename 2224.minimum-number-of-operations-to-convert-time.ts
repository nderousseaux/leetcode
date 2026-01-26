/*
 * @lc app=leetcode id=2224 lang=typescript
 *
 * [2224] Minimum Number of Operations to Convert Time
 */

// @lc code=start
function convertTime(current: string, correct: string): number {
    function toMin(c: string): number {
        let s: string[] = c.split(":");
        return parseInt(s[0]) * 60 + parseInt(s[1]);
    }
    let [res, cu, co]: number[] = [0, toMin(current), toMin(correct)];
    
    while(cu != co) {
        let diff: number = co - cu;

        const operations = [60, 15, 5, 1];
        for (const op of operations) {
            if (diff >= op) {
                cu += op;
                break;
            }
        }
        res += 1;
    }

    return res;
};
// @lc code=end

