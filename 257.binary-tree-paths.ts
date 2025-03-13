/*
 * @lc app=leetcode id=257 lang=typescript
 *
 * [257] Binary Tree Paths
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

function binaryTreePaths(root: TreeNode | null): string[] {
	const res: string[] = [];
	if (!root) return res;
	const dfs = (node: TreeNode, path: string) => {
		if (!node.left && !node.right) {
			res.push(path + node.val);
			return;
		}
		if (node.left) dfs(node.left, path + node.val + '->');
		if (node.right) dfs(node.right, path + node.val + '->');
	}
	dfs(root, '');
	return res;
    
};
// @lc code=end

