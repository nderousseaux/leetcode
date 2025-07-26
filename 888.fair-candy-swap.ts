/*
 * @lc app=leetcode id=888 lang=typescript
 *
 * [888] Fair Candy Swap
 */

// @lc code=start
function fairCandySwap(aliceSizes: number[], bobSizes: number[]): number[] {
    const sumA = aliceSizes.reduce((acc, x) => acc + x, 0);
    const sumB = bobSizes.reduce((acc, x) => acc + x, 0);
    const delta = (sumA - sumB) / 2;
    
    const setB = new Set(bobSizes);
    
    for (let x of aliceSizes) {
        
        const y = x - delta;
        if (setB.has(y)) {
            return [x, y];
        }
    }


};
// @lc code=end

