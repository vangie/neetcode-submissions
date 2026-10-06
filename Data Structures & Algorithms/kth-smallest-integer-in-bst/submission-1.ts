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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root: TreeNode | null, k: number): number {
        let count = 0;
        let res = -1;
        let dfs = (node: TreeNode | null): number => {
            if (!node) return;
            dfs(node.left);
            count++;
            if (count === k) {
                res = node.val;
                return;
            }
            dfs(node.right);

            return count;
        };
        dfs(root);
        return res;
    }
}
