class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    swimInWater(grid: number[][]): number {
        const n = grid.length;
        const visit = new Set();
        const minPQ = new MinPriorityQueue((entry: number[]) => entry[0]);
        const directions = [
            [0, 1],
            [0, -1],
            [1, 0],
            [-1, 0],
        ];

        minPQ.push([grid[0][0], 0, 0]);
        visit.add("0,0");

        while (!minPQ.isEmpty()) {
            const [t, r, c] = minPQ.pop();
            if (r === n - 1 && c === n - 1) {
                return t;
            }

            for (const [dr, dc] of directions) {
                const neiR = r + dr;
                const neiC = c + dc;
                if (
                    neiR < 0 ||
                    neiC < 0 ||
                    neiR >= n ||
                    neiC >= n ||
                    visit.has(`${neiR},${neiC}`)
                ) {
                    continue;
                }
                visit.add(`${neiR},${neiC}`);
                minPQ.push([Math.max(t, grid[neiR][neiC]), neiR, neiC]);
            }
        }
    }
}
