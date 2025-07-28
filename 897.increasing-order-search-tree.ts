/*
 * @lc app=leetcode id=897 lang=typescript
 *
 * [897] Increasing Order Search Tree
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

function increasingBST(root: TreeNode | null): TreeNode | null {
    let l: number[] = []
    
    function through(root){
        if (root.val != undefined) l.push(root.val);
        if (root.left != undefined) through(root.left);
        if (root.right != undefined) through(root.right);
    }
    through(root);
    l = l.sort((a,b) => a - b);
    // Build a st
    let newRoot = new TreeNode(l[0]);
    let current = newRoot;

    for (let i = 1; i < l.length; i++) {
        current.right = new TreeNode(l[i]);
        current = current.right;
    }

    return newRoot;
};
// @lc code=end

