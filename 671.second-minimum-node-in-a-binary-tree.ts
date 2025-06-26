/*
 * @lc app=leetcode id=671 lang=typescript
 *
 * [671] Second Minimum Node In a Binary Tree
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

function findSecondMinimumValue(root: TreeNode | null): number {
    if (!root.left) return -1;

    // If it's the same value -> go deeper, if not, stop it
    const left: number = root.left.val == root.val ? findSecondMinimumValue(root.left) : root.left.val
    const right: number = root.right.val == root.val ? findSecondMinimumValue(root.right) : root.right.val 

    // If one of side has no bigger value, return the other side (if both hasn't, return -1)
    // If the two sides have bigger value, return the min of them
    return left == -1 || right == -1 ? Math.max(left, right) : Math.min(left, right);
};
// @lc code=end

