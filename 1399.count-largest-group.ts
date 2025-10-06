/*
 * @lc app=leetcode id=1399 lang=typescript
 *
 * [1399] Count Largest Group
 */

// @lc code=start
function countLargestGroup(n: number): number {
    let res: number[] = new Array(37).fill(0); // Maximum digit sum for n <= 9999 is 36
    for(let i = 1 ; i <= n; i++){
        let sum: number = i.toString().split('').reduce((acc, curr) => acc + Number(curr), 0);
        res[sum] += 1;
    } 
    const max = Math.max(...res);
    return res.filter(x => x === max).length;
};
// @lc code=end

