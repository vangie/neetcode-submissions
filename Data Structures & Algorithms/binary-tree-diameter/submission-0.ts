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
    diameterOfBinaryTree(root: TreeNode | null): number {
        let diameter = 0;

        let depth = (parent: TreeNode): number => {
            if (parent === null) {
                return 0;
            }

            const leftDepth = depth(parent.left);
            const rightDepth = depth(parent.right);

            diameter = Math.max(diameter, leftDepth + rightDepth);

            return Math.max(leftDepth, rightDepth) + 1;
        };

        depth(root);

        return diameter;
    }
}
