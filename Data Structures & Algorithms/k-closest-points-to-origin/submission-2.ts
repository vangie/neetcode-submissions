class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points: number[][], k: number): number[][] {
        const q = new MaxPriorityQueue((p: number[]) => p[0]);

        for (const [x, y] of points) {
            q.enqueue([x ** 2 + y ** 2, x, y]);

            if (q.size() > k) {
                q.dequeue();
            }
        }

        const res: number[][] = [];

        while (!q.isEmpty()) {
            const [_, x, y] = q.dequeue();
            res.push([x, y]);
        }

        return res;
    }
}
