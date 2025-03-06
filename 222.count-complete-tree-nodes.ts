/*
 * @lc app=leetcode id=222 lang=typescript
 *
 * [222] Count Complete Tree Nodes
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

function countNodes(root: TreeNode | null): number {
	if (!root) return 0;
	let leftHeight = 0;
	let left = root;
	while (left) {
		leftHeight++;
		left = left.left;
	}
	let rightHeight = 0;
	let right = root;
	while (right) {
		rightHeight++;
		right = right.right;
	}
	if (leftHeight === rightHeight) return Math.pow(2, leftHeight) - 1;
	return 1 + countNodes(root.left) + countNodes(root.right);
    
};
// @lc code=end

