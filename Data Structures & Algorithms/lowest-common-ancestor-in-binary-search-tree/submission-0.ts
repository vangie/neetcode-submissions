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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
    lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null) {
        if (p.val > q.val) {
            [p, q] = [q, p];
        }

        if (root.val > q.val) {
            return this.lowestCommonAncestor(root.left, p, q);
        } else if (root.val < p.val) {
            return this.lowestCommonAncestor(root.right, p, q);
        } else {
            return root;
        }
    }
}
