/*
 * @lc app=leetcode id=2206 lang=typescript
 *
 * [2206] Divide Array Into Equal Pairs
 */

// @lc code=start
function divideArray(nums: number[]): boolean {
    let map: Record<number, number> = {}
    for (let i of nums) {
        if (!(i in map))
            map[i] = 0;
        map[i]++;
    }
    return Object.values(map).every((v) => v % 2 == 0);
};
// @lc code=end

