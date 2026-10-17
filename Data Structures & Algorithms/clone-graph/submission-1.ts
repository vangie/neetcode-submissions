/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node: Node | null): Node {
        const visited = new Map<Node, Node>();

        const dfs = (node: Node | null) => {
            if (!node) {
                return null;
            }

            if (visited.has(node)) {
                return visited.get(node);
            }

            const newNeighbors = [];
            const newNode = new Node(node.val, newNeighbors);
            visited.set(node, newNode);

            for (let neighbor of node.neighbors) {
                newNeighbors.push(dfs(neighbor));
            }

            return newNode;
        };

        return dfs(node);
    }
}
