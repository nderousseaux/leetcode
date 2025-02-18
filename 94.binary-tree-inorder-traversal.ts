/*
 * @lc app=leetcode id=94 lang=typescript
 *
 * [94] Binary Tree Inorder Traversal
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

function inorderTraversal(root: TreeNode | null): number[] {

		let result: number[] = [];
		let stack: TreeNode[] = [];
		let current: TreeNode | null = root;

		while (current || stack.length > 0) {
				while (current) {
						stack.push(current);
						current = current.left;
				}
				current = stack.pop();
				result.push(current.val);
				current = current.right;
		}

		return result;
    
};
// @lc code=end

