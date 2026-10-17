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
        if(!node) return null;
        const visited = new Map<Node, Node>();
        visited.set(node, new Node(node.val));
        const q = new Queue();
        q.push(node);

        while (!q.isEmpty()) {
            let cur = q.pop();
            for (const nei of cur.neighbors) {
                if (!visited.has(nei)) {
                    visited.set(nei, new Node(nei.val));
                    q.push(nei);
                }
                visited.get(cur).neighbors.push(visited.get(nei));
            }
        }

        return visited.get(node);
    }
}
