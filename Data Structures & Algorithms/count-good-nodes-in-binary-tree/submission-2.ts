/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    goodNodes(root: TreeNode | null): number {
        let res = 0;
        let q = new Queue();
        q.push([root, -Infinity]);

        while (!q.isEmpty()) {
            let [node, maxVal] = q.pop();
            if (node.val >= maxVal) {
                res++;
            }
            const newMax = Math.max(maxVal, node.val);
            if (node.left) {
                q.push([node.left, newMax]);
            }
            if (node.right) {
                q.push([node.right, newMax]);
            }
        }
        return res;
    }
}
