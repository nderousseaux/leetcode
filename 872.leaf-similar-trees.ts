/*
 * @lc app=leetcode id=872 lang=typescript
 *
 * [872] Leaf-Similar Trees
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

function leafSimilar(root1: TreeNode | null, root2: TreeNode | null): boolean {
    function through(root: TreeNode | null): number[] {
        if (root === null) return [];
        let l = through(root.left).concat(through(root.right))

        return l.length == 0 ? [root.val] : l;

    }
    return through(root1).toString() === through(root2).toString();
};
// @lc code=end

