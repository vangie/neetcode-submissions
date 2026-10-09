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

class Codec {
    /**
     * Encodes a tree to a single string.
     *
     * @param {TreeNode} root
     * @return {string}
     */
    serialize(root: TreeNode | null): string {
        if (!root) return "N";
        const res = [];
        const q = new Queue();
        q.push(root);

        while (!q.isEmpty()) {
            const n = q.pop();
            if (!n) {
                res.push("N");
            } else {
                res.push(n.val);
                q.push(n.left);
                q.push(n.right);
            }
        }
        return res.join(",");
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data: string): TreeNode {
        const vals = data.split(",");
        if (vals[0] === "N") return null;
        const root = new TreeNode(parseInt(vals[0]));
        const q = new Queue([root]);
        let i = 1;

        while (!q.isEmpty()) {
            const n = q.pop();
            if (vals[i] !== "N") {
                n.left = new TreeNode(parseInt(vals[i]));
                q.push(n.left);
            }
            i++;
            if (vals[i] !== "N") {
                n.right = new TreeNode(parseInt(vals[i]));
                q.push(n.right);
            }
            i++;
        }
        return root;
    }
}
