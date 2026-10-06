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
     * @return {number[]}
     */
    rightSideView(root: TreeNode | null): number[] {
        const res: number[] = [];
        const q = new Queue();

        q.push(root);

        while (!q.isEmpty()) {
            let rightSide = null;

            for (let i = q.size(); i > 0; i--) {
                const node = q.pop();
                if (node) {
                    rightSide = node;
                    q.push(node.left);
                    q.push(node.right);
                }
            }
            if (rightSide) {
                res.push(rightSide.val);
            }
        }

        return res;
    }
}
