/*
 * @lc app=leetcode id=110 lang=typescript
 *
 * [110] Balanced Binary Tree
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

function height(root: TreeNode | null): number {
	if (root === null) {
		return 0;
	}
	return Math.max(height(root.left), height(root.right)) + 1;
}

function isBalanced(root: TreeNode | null): boolean {
	if (root === null) {
		return true;
	}
	let leftHeight = height(root.left);
	let rightHeight = height(root.right);
	if (Math.abs(leftHeight - rightHeight) > 1) {
		return false;
	}
	return isBalanced(root.left) && isBalanced(root.right);
    
};
// @lc code=end

