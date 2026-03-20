/*
 * @lc app=leetcode id=2094 lang=typescript
 *
 * [2094] Finding 3-Digit Even Numbers
 */

// @lc code=start
function findEvenNumbers(digits: number[]): number[] {
    let res: number[] = []

    for (let n of digits.filter(v => v % 2 == 0)) {
        let remainingDigits: number[] = digits.toSpliced(digits.indexOf(n),1)
        
        // All combinations with remaining
        for (let i = 0; i < remainingDigits.length; i++) {
            for (let j = 0; j < remainingDigits.length; j++) {
                if (i === j) continue;
                let num = remainingDigits[i] * 100 + remainingDigits[j] * 10 + n;
                if (num >= 100 && !res.includes(num)) {
                    res.push(num);
                }
            }
        }
        
    }

    return res.sort((a,b) => a - b);
};
// @lc code=end

