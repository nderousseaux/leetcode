/*
 * @lc app=leetcode id=2073 lang=typescript
 *
 * [2073] Time Needed to Buy Tickets
 */

// @lc code=start
function timeRequiredToBuy(tickets: number[], k: number): number {
    let nTPerson = tickets[k]
    let res: number = 0
    
    for (let i = 0; i < tickets.length; i++) {
        if (i < k)
            res += Math.min(tickets[i], nTPerson);
        else if (i === k)
            res += nTPerson;
        else {
            if (tickets[i] < nTPerson)
                res += tickets[i];
            else
                res += nTPerson - 1;
        }



    }
    return res
};
// @lc code=end

