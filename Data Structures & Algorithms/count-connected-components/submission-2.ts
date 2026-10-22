class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n: number, edges: number[][]): number {
        const adj = Array.from({ length: n }, () => []);
        for (const [u, v] of edges) {
            adj[u].push(v);
            adj[v].push(u);
        }
        const visited = Array(n).fill(false);

        const bfs = (node: number) => {
            const q = new Queue();
            q.push(node);
            while (!q.isEmpty()) {
                const n = q.pop();
                visited[n] = true;
                for (let nei of adj[n]) {
                    if (!visited[nei]) {
                        q.push(nei);
                    }
                }
            }
        };

        let res = 0;
        for (let node = 0; node < n; node++) {
            if (!visited[node]) {
                bfs(node);
                res++;
            }
        }
        return res;
    }
}
