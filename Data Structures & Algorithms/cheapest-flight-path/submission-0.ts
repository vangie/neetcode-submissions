class Solution {
    /**
     * @param {number} n
     * @param {number[][]} flights
     * @param {number} src
     * @param {number} dst
     * @param {number} k
     * @return {number}
     */
    findCheapestPrice(n: number, flights: number[][], src: number, dst: number, k: number) {
        const adj = Array.from({ length: n }, () => []);
        const dist = Array.from({ length: n }, () => Array(k + 2).fill(Infinity));

        for (let [u, v, cst] of flights) {
            adj[u].push([v, cst]);
        }

        dist[src][0] = 0;
        const minHeap = new MinPriorityQueue((entry: number) => entry[0]);
        minHeap.push([0, src, 0]); // cost, node, flightsUsed

        while (!minHeap.isEmpty()) {
            const [cst, node, flightsUsed] = minHeap.pop();

            if (node === dst) return cst;

            if (flightsUsed === k + 1 || dist[node][flightsUsed] < cst) continue;

            for (let [nei, w] of adj[node]) {
                const nextCst = cst + w;
                const nextFlights = flightsUsed + 1;

                if (dist[nei][nextFlights] > nextCst) {
                    dist[nei][nextFlights] = nextCst;
                    minHeap.push([nextCst, nei, nextFlights]);
                }
            }
        }

        return -1;
    }
}
