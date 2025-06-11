/*
 * @lc app=leetcode id=599 lang=typescript
 *
 * [599] Minimum Index Sum of Two Lists
 */

// @lc code=start
function findRestaurant(list1: string[], list2: string[]): string[] {
    // If empty
    if (list1.length == 0 || list2.length == 0) return [""];
   
    // Map with value of list1
    let map = new Map();
    for (let i = 0; i < list1.length; i++) map.set(list1[i], i);

    let min = Number.MAX_SAFE_INTEGER;
    let res: string[] = [];
    let total, item;


    //For each list2 item
    for (let j = 0; j < list2.length; j++) {
        item = list2[j];

        if (!map.has(item)) continue;

        total = j + map.get(item)

        if (total < min) {
            res = [];
            min = total;
        } 
        if (total <= min) 
            res.push(item);
    }
    return res;
};
// @lc code=end

