/*
 * @lc app=leetcode id=590 lang=typescript
 *
 * [590] N-ary Tree Postorder Traversal
 */

// @lc code=start
/**
 * Definition for node.
 * class _Node {
 *     val: number
 *     children: _Node[]
 *     constructor(val?: number) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.children = []
 *     }
 * }
 */

function postorder(root: _Node | null): number[] {
    let res: number[] = [];
    if (root == undefined)
        return res;

    function through(node: _Node | null) {
        for (const c of node.children)
            through(c)
        res.push(node.val)
    }

    through(root)
    return res
};
// @lc code=end
