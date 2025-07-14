/*
 * @lc app=leetcode id=783 lang=typescript
 *
 * [783] Minimum Distance Between BST Nodes
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

function minDiffInBST(root: TreeNode | null): number {
    let tab: number[] = []

    function treeToArray(root: TreeNode) {
        if (root.val != null) tab.push(root.val);
        if (root.left != null)  treeToArray(root.left)
        if (root.right != null) treeToArray(root.right)
    }  

    treeToArray(root)
    tab = tab.sort((a,b) => a-b);

    let res: number = Number.MAX_SAFE_INTEGER;
    for(let i=0; i<tab.length-1; i++){
        res = Math.min(res, Math.abs(tab[i] - tab[i + 1]))
    }
    
    return res;
    
    
};
// @lc code=end

