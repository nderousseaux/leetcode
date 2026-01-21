/*
 * @lc app=leetcode id=2190 lang=typescript
 *
 * [2190] Most Frequent Number Following Key In an Array
 */

// @lc code=start
function mostFrequent(nums: number[], key: number): number {
    const freq = new Map<number, number>();
    let maxFreq = 0;
    let result = 0;
    
    for(let i = 0; i < nums.length - 1; i++) {
        if(nums[i] == key) {
            const target = nums[i+1];
            const count = (freq.get(target) || 0) + 1;
            freq.set(target, count);
            
            if(count > maxFreq) {
                maxFreq = count;
                result = target;
            }
        }
    }
    
    return result;
};
// @lc code=end

