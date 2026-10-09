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
    maxPathSum(root: TreeNode | null): number {
        let res = -Infinity;

        function dfs(node: TreeNode | null): number {
            if (!node) return 0;

            const left = Math.max(0, dfs(node.left));
            const right = Math.max(0, dfs(node.right));

            // 当前节点作为路径最高点
            res = Math.max(res, node.val + left + right);

            // 返回给父节点的单边最大贡献
            return node.val + Math.max(left, right);
        }

        dfs(root);
        return res;
    }
}
