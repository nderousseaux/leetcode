/*
 * @lc app=leetcode id=563 lang=typescript
 *
 * [563] Binary Tree Tilt
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function findTilt(root: TreeNode | null): number {
    let res: number = 0;

    const through = (n: TreeNode | null): number => {
        if (!n) return 0;
        const l: number = through(n.left)
        const r: number = through(n.right)
        res += Math.abs(l-r);
        return n.val + l + r
    }
    through(root);
    return res
};
// @lc code=end

