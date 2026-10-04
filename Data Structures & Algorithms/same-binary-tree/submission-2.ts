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
        const q1 = new Queue();
        const q2 = new Queue();
        q1.push(p);
        q2.push(q);

        while (!q1.isEmpty() && !q2.isEmpty()) {
            for (let i = q1.size(); i > 0; i--) {
                let nodeP = q1.pop();
                let nodeQ = q2.pop();

                if (nodeP === null && nodeQ === null) continue;

                if (nodeP === null || nodeQ === null || nodeP.val !== nodeQ.val) return false;

                q1.push(nodeP.left);
                q1.push(nodeP.right);
                q2.push(nodeQ.left);
                q2.push(nodeQ.right);
            }
        }

        return true;
    }
}
