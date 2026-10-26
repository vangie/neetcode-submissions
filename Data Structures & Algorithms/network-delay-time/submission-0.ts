class Solution {
    /**
     * @param {number[][]} times
     * @param {number} n
     * @param {number} k
     * @return {number}
     */
    networkDelayTime(times: number[][], n: number, k: number): number {
        const adj: Record<number, [number, number][]> = {};
        for (const [u, v, w] of times) {
            (adj[u] ??= []).push([v, w]);
        }

        const dist = Array(n + 1).fill(Infinity);
        const dfs = (node: number, time: number) => {
            if (time >= dist[node]) return;
            dist[node] = time;
            if (!adj[node]) return;
            for (const [nei, w] of adj[node]) {
                dfs(nei, time + w);
            }
        };
        dfs(k, 0);
        const res = Math.max(...dist.slice(1));
        return res === Infinity ? -1 : res;
    }
}
