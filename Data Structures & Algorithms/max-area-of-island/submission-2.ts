class DSU {
    private parent: number[];
    public size: number[];
    public maxSize: number = 0;

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
        const up = this.find(u);
        const vp = this.find(v);
        if (up === vp) return false;
        if (this.size[up] > this.size[vp]) {
            this.parent[vp] = up;
            this.size[up] += this.size[vp];
            this.maxSize = Math.max(this.maxSize, this.size[up]);
        } else {
            this.parent[up] = vp;
            this.size[vp] += this.size[up];
            this.maxSize = Math.max(this.maxSize, this.size[vp]);
        }
        return true;
    }
}

class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid: number[][]): number {
        const ROWS = grid.length,
            COLS = grid[0].length;
        const dsu = new DSU(ROWS * COLS);
        const index = (r: number, c: number) => r * COLS + c;

        const directions = [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1],
        ];

        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (grid[r][c] === 0) {
                    dsu.size[index(r, c)] = 0;
                } else {
                    dsu.maxSize = Math.max(dsu.maxSize, 1);
                    
                    for (let [dr, dc] of directions) {
                        let nr = r + dr;
                        let nc = c + dc;
                        if (nr >= 0 && nr < ROWS && nc >= 0 && nc < COLS && grid[nr][nc] === 1) {
                            dsu.union(index(r, c), index(nr, nc));
                        }
                    }
                }
            }
        }

        return dsu.maxSize;
    }
}
