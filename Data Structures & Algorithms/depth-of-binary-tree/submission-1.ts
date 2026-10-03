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
    maxDepth(root: TreeNode | null): number {
        const q = new Queue();
        if (root != null) {
            q.push(root);
        }

        let level = 0;
        while (q.size() > 0) {
            const size = q.size();
            for (let i = 0; i < size; i++) {
                const node = q.pop();
                if (node.left !== null) {
                    q.push(node.left);
                }
                if (node.right !== null) {
                    q.push(node.right);
                }
            }
            level++;
        }
        return level;
    }
}
