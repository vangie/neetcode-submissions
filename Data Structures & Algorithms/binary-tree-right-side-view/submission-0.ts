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

        const levels = this.levelOrder(root);

        for (let i = 0; i < levels.length; i++) {
            res.push(levels[i][0]);
        }

        return res;
    }

    private levelOrder(root: TreeNode | null): number[][] {
        const res: number[][] = [];
        if (!root) return [];
        const q = new Queue();
        q.push(root);

        while (!q.isEmpty()) {
            const level = [];

            for (let i = q.size(); i > 0; i--) {
                const node = q.pop();
                level.push(node.val);
                if (node.right) q.push(node.right);
                if (node.left) q.push(node.left);
            }
            if (level.length > 0) {
                res.push(level);
            }
        }

        return res;
    }
}
