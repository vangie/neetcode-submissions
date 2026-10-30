class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    swimInWater(grid: number[][]): number {
        const n = grid.length;
        const visit = Array.from({ length: n }, () => Array(n).fill(false));

        let minH = grid[0][0],
            maxH = grid[0][0];

        for (let row = 0; row < n; row++) {
            for (let col = 0; col < n; col++) {
                maxH = Math.max(maxH, grid[row][col]);
                minH = Math.min(minH, grid[row][col]);
            }
        }

        const dfs = (node: [number, number], t: number) => {
            const [r, c] = node;
            if (Math.min(r, c) < 0 || Math.max(r, c) >= n || visit[r][c] || grid[r][c] > t) {
                return false;
            }
            if (r === n - 1 && c === n - 1) {
                return true;
            }
            visit[r][c] = true;
            return (
                dfs([r + 1, c], t) || dfs([r - 1, c], t) || dfs([r, c + 1], t) || dfs([r, c - 1], t)
            );
        };

        let l = minH,
            r = maxH;
        while (l < r) {
            let m = l + ((r - l) >> 1);
            if (dfs([0, 0], m)) {
                r = m;
            } else {
                l = m + 1;
            }
            for (let row = 0; row < n; row++) {
                for (let col = 0; col < n; col++) {
                    visit[row][col] = false;
                }
            }
        }

        return r;
    }
}
