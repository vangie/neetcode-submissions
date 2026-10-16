class DSU {
    private parent: number[];
    private size: number[];

    constructor(n: number) {
        this.parent = Array(n)
            .fill(0)
            .map((_, i) => i);
        this.size = Array(n).fill(1);
    }

    find(node: number) {
        if (this.parent[node] !== node) {
            this.parent[node] = this.find(this.parent[node]);
        }
        return this.parent[node];
    }

    union(u: number, v: number) {
        let pu = this.find(u);
        let pv = this.find(v);
        if (pu === pv) return false;
        if (this.size[pu] >= this.size[pv]) {
            this.size[pu] += this.size[pv];
            this.parent[pv] = pu;
        } else {
            this.size[pv] += this.size[pu];
            this.parent[pu] = pv;
        }
        return true;
    }
}

class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid: string[][]): number {
        const ROWS = grid.length;
        const COLS = grid[0].length;
        const dsu = new DSU(ROWS * COLS);

        const directions = [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1],
        ];

        let islands = 0;

        const index = (r: number, c: number) => r * COLS + c;

        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (grid[r][c] === "1") {
                    islands++;
                    for (let [dr, dc] of directions) {
                        let nr = r + dr,
                            nc = c + dc;
                        if (nr >= 0 && nc >= 0 && nr < ROWS && nc < COLS && grid[nr][nc] === "1") {
                            if (dsu.union(index(r, c), index(nr, nc))) {
                                islands--;
                            }
                        }
                    }
                }
            }
        }

        return islands;
    }
}
