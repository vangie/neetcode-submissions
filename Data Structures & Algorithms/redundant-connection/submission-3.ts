class Solution {
    /**
     * @param {number[][]} edges
     * @return {number[]}
     */
    findRedundantConnection(edges: number[][]): number[] {
        const n = edges.length;
        const indegree = new Array(n + 1).fill(0);
        const adj = Array.from({ length: n + 1 }, () => []);

        for (const [u, v] of edges) {
            adj[u].push(v);
            adj[v].push(u);
            indegree[u]++;
            indegree[v]++;
        }

        const q = new Queue();
        for (let i = 1; i <= n; i++) {
            if (indegree[i] === 1) q.push(i);
        }

        while (!q.isEmpty()) {
            const node = q.pop();
            indegree[node]--;
            for (const nei of adj[node]) {
                indegree[nei]--;
                if (indegree[nei] === 1) q.push(nei);
            }
        }

        for (let i = edges.length - 1; i >= 0; i--) {
            const [u, v] = edges[i];
            if (indegree[u] === 2 && indegree[v]) return [u, v];
        }
        return [];
    }
}
