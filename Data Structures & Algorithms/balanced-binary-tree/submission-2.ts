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
        let stack = [];
        let node = root,
            last = null;
        let depths = new Map();

        while (stack.length > 0 || node !== null) {
            if (node != null) {
                stack.push(node);
                node = node.left;
            } else {
                node = stack[stack.length - 1];
                if (node.right === null || last === node.right) {
                    stack.pop();
                    let left = depths.get(node.left) || 0;
                    let right = depths.get(node.right) || 0;

                    if (Math.abs(left - right) > 1) return false;
                    depths.set(node, 1 + Math.max(left, right));

                    last = node;
                    node = null;
                } else {
                    node = node.right;
                }
            }
        }
        return true;
    }
}
