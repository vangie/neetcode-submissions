class Solution {
    /**
     * @param {number[][]} points
     * @return {number}
     */
    minCostConnectPoints(points: number[][]): number {
        const n = points.length;
        const adj = {};
        for (let i = 0; i < n; i++) {
            adj[i] = [];
        }

        for (let i = 0; i < n; i++) {
            const [x1, y1] = points[i];
            for (let j = i + 1; j < n; j++) {
                const [x2, y2] = points[j];
                const dist = Math.abs(x1 - x2) + Math.abs(y1 - y2);
                adj[i].push([dist, j]);
                adj[j].push([dist, i]);
            }
        }

        let res = 0;
        const visit = new Set();
        const minHeap = new MinPriorityQueue((entry: [number, number]) => entry[0]);
        minHeap.push([0, 0]);

        while (visit.size < n) {
            const [cost, i] = minHeap.pop();
            if (visit.has(i)) continue;
            res += cost;
            visit.add(i);
            for (const [neiCost, nei] of adj[i]) {
                if (!visit.has(nei)) {
                    minHeap.push([neiCost, nei]);
                }
            }
        }

        return res;
    }
}
