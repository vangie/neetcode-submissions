class Solution {
    /**
     * @param {number[][]} edges
     * @return {number[]}
     */
    findRedundantConnection(edges: number[][]): number[] {
        const n = edges.length;
        const adj = Array.from({ length: n + 1 }, () => []);

        const dfs = (node: number, parent: number, visited: boolean[]) => {
            if (visited[node]) return true;
            visited[node] = true;
            for (const nei of adj[node]) {
                if (nei === parent) continue;
                if (dfs(nei, node, visited)) return true;
            }
            return false;
        };

        for (const [u, v] of edges) {
            adj[u].push(v);
            adj[v].push(u);
            const visited = Array(n + 1).fill(false);
            if (dfs(u, -1, visited)) {
                return [u, v];
            }
        }
        return [];
    }
}
