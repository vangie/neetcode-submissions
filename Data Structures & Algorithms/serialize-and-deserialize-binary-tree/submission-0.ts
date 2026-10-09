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
        const res: string[] = [];

        function dfs(node: TreeNode | null) {
            if(node === null) {
                res.push('N');
                return;
            }
            res.push(node.val.toString());
            dfs(node.left);
            dfs(node.right);
        }

        dfs(root);

        return res.join(",");
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data: string): TreeNode {
        const nodes = data.split(",");
        let i = 0;
        function dfs(): TreeNode {
            if(nodes[i] === 'N'){
                i++;
                return null;
            }
            const node = new TreeNode(parseInt(nodes[i]));
            i++;
            node.left = dfs();
            node.right = dfs();
            return node;
        }
        return dfs();
    }
}
