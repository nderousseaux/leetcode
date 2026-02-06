/*
 * @lc app=leetcode id=2303 lang=typescript
 *
 * [2303] Calculate Amount Paid in Taxes
 */

// @lc code=start
function calculateTax(brackets: number[][], income: number): number {
    let res: number = 0;

    let i: number = 0;
    while(income > 0) {
        // What amount of money will be taxed in this bracket ?
        let taxed: number = Math.min(
            brackets[i][0] - (brackets[i-1]?.[0] ?? 0),
            income 
        )
        
        income -= taxed;
        res += taxed * brackets[i][1];
        i++;
    }
    return res/100;
    
};
// @lc code=end

