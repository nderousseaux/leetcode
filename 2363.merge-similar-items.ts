/*
 * @lc app=leetcode id=2363 lang=typescript
 *
 * [2363] Merge Similar Items
 */

// @lc code=start
function mergeSimilarItems(items1: number[][], items2: number[][]): number[][] {
    let t: number[][] = items1.concat(items2).toSorted((a,b) => a[0] - b[0]);
    let res: number[][] = [];

    for(let i = 0; i < t.length; i++) {
        let index: number = res.findIndex(a => a[0] == t[i][0]);

        // if not already in list, add it
        if (index == -1) {
            res.push([t[i][0], 0]);
            index = res.length - 1;
        }

        res[index][1] += t[i][1];
    }


    return res;
    
};
// @lc code=end

