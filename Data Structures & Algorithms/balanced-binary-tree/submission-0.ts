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
     * @return {boolean}
     */
    isBalanced(root: TreeNode | null): boolean {
        if (root === null) {
            return true;
        }

        const map = new Map<TreeNode, number>();

        let depth = (parent: TreeNode | null): number => {
            if (parent === null) {
                return 0;
            }

            if (map.has(parent)) {
                return map.get(parent);
            }

            const d = Math.max(depth(parent.left), depth(parent.right)) + 1;
            map.set(parent, d);
            return d;
        };

        return (
            Math.abs(depth(root.left) - depth(root.right)) <= 1 &&
            this.isBalanced(root.left) &&
            this.isBalanced(root.right)
        );
    }
}
