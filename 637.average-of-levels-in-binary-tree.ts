/*
 * @lc app=leetcode id=637 lang=typescript
 *
 * [637] Average of Levels in Binary Tree
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

function averageOfLevels(root: TreeNode | null): number[] {
    if(!root) return [];
    let res: number[] = [];

    let nodes_currents: TreeNode[] = [root]

    while (nodes_currents.length) {
        let next_nodes_currents: TreeNode[] = [];
        let res_level: number = 0
        for(let node of nodes_currents) {
            res_level += node.val;
            if(node.left) next_nodes_currents.push(node.left);
            if(node.right) next_nodes_currents.push(node.right);
        }
        res_level /= nodes_currents.length
        res.push(res_level)
        nodes_currents = next_nodes_currents;
    }

    return res;  
};
// @lc code=end

