/*
 * @lc app=leetcode id=2404 lang=typescript
 *
 * [2404] Most Frequent Even Element
 */

// @lc code=start
function mostFrequentEven(nums: number[]): number {
    const frequency = new Map<number, number>();
    for (const num of nums) {
        if (num % 2 == 1) continue
        frequency.set(num, (frequency.get(num) ?? 0) + 1);
    }

    let maxFreq = 0;
    let result = -1;
    for (const [num, freq] of frequency) {
        if (freq > maxFreq || (freq === maxFreq && num < result)) {
            maxFreq = freq;
            result = num;
        }
    }

    return result;
};
// @lc code=end

