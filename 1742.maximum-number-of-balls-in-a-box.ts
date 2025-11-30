/*
 * @lc app=leetcode id=1742 lang=typescript
 *
 * [1742] Maximum Number of Balls in a Box
 */

// @lc code=start
function countBalls(lowLimit: number, highLimit: number): number {
    let boxes: { [key: number]: number } = {};

    for (let b = lowLimit; b <= highLimit; b++) {
        let idxBox = b.toString().split("").reduce((acc, curr) => acc + parseInt(curr), 0);
        
        boxes[idxBox] = (boxes[idxBox] || 0) + 1;
    }
    
    return Math.max(...Object.values(boxes));
};
// @lc code=end

