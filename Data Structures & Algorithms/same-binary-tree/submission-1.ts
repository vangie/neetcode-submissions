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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
        const stack: [TreeNode, TreeNode][] = [[p, q]];

        while (stack.length) {
            const [node1, node2] = stack.pop();

            if (!node1 && !node2) continue;
            if (!node1 || !node2 || node1.val !== node2.val) {
                return false;
            }
            stack.push([node1.right, node2.right]);
            stack.push([node1.left, node2.left]);
        }

        return true;
    }
}
