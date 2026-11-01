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
        let prices = new Array(n).fill(Infinity);
        prices[src] = 0;

        const adj = Array.from({ length: n }, () => []);

        for (const [u, v, cst] of flights) {
            adj[u].push([v, cst]);
        }

        const q = new Queue([[0, src, 0]]); // [cost, node, stops];

        while (!q.isEmpty()) {
            const [cst, node, stops] = q.pop();
            if (stops > k) continue;

            for (const [nei, w] of adj[node]) {
                const nextCost = cst + w;
                if (nextCost < prices[nei]) {
                    prices[nei] = nextCost;
                    q.push([nextCost, nei, stops + 1]);
                }
            }
        }

        return prices[dst] === Infinity ? -1 : prices[dst];
    }
}
