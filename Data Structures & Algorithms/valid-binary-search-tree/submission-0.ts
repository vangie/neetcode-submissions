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
        return this.valid(root, -Infinity, Infinity);
    }

    valid(node: TreeNode | null, lowerBound: number, upperBound: number): boolean {
        if (node === null) {
            return true;
        }
        if (!(lowerBound < node.val && node.val < upperBound)) {
            return false;
        }
        return (
            this.valid(node.left, lowerBound, node.val) &&
            this.valid(node.right, node.val, upperBound)
        );
    }
}
