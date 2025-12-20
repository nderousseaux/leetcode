/*
 * @lc app=leetcode id=1909 lang=typescript
 *
 * [1909] Remove One Element to Make the Array Strictly Increasing
 */

// @lc code=start
function canBeIncreasing(nums: number[]): boolean {
    for(let i = 0; i < nums.length; i++) {
        // Remove the item 
        let tmp: number[] = nums.slice(0, i).concat(
            nums.slice(i+1, nums.length)
        )

        // Test if the list is strictly increasing
        if (tmp.every(
            (n, j, a) => {
                if (j == 0) return true;
                return a[j-1] < n;
            }
        )) {
            return true;
        }
        

    }

    return false
};
// @lc code=end

