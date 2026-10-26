class Solution {
    /**
     * @param {number[][]} times
     * @param {number} n
     * @param {number} k
     * @return {number}
     */
    networkDelayTime(times: number[][], n: number, k: number): number {
        const dist = Array.from({ length: n }, () => Array(n).fill(Infinity));

        for (let i = 0; i < n; i++) {
            dist[i][i] = 0;
        }

        for (const [u, v, w] of times) {
            dist[u - 1][v - 1] = w;
        }

        for (let mid = 0; mid < n; mid++) {
            for (let i = 0; i < n; i++) {
                for (let j = 0; j < n; j++) {
                    dist[i][j] = Math.min(dist[i][j], dist[i][mid] + dist[mid][j]);
                }
            }
        }
        const res = Math.max(...dist[k - 1]);
        return res === Infinity ? -1 : res;
    }
}
