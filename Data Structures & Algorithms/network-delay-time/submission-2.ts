class Solution {
    /**
     * @param {number[][]} times
     * @param {number} n
     * @param {number} k
     * @return {number}
     */
    networkDelayTime(times: number[][], n: number, k: number): number {
        let dist = new Array(n).fill(Infinity);
        dist[k - 1] = 0;
        for (let i = 0; i < n - 1; i++) {
            for (const [u, v, w] of times) {
                if (dist[u - 1] + w < dist[v - 1]) {
                    dist[v - 1] = dist[u - 1] + w;
                }
            }
        }

        const maxDist = Math.max(...dist);
        return maxDist === Infinity ? -1 : maxDist;
    }
}
