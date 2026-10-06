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
    isValidBST(root: TreeNode | null): boolean {
        if (root === null) {
            return true;
        }

        const q = new Queue([[root, -Infinity, Infinity]]);

        while (q.size() > 0) {
            const [node, lowerBound, upperBound] = q.pop();
            if (!(lowerBound < node.val && node.val < upperBound)) {
                return false;
            }
            if (node.left) {
                q.push([node.left, lowerBound, node.val]);
            }

            if (node.right) {
                q.push([node.right, node.val, upperBound]);
            }
        }

        return true;
    }
}
