class DSU {
    private parent: number[];
    private size: number[];
    constructor(n: number) {
        this.parent = Array.from({ length: n + 1 }, (_, i) => i);
        this.size = Array(n + 1).fill(1);
    }

    find(node: number): number {
        if (this.parent[node] !== node) {
            this.parent[node] = this.find(this.parent[node]);
        }
        return this.parent[node];
    }

    union(u: number, v: number): boolean {
        let pu = this.find(u),
            pv = this.find(v);
        if (pu === pv) return false;
        if (this.size[pv] > this.size[pu]) [pv, pu] = [pu, pv];
        this.parent[pv] = pu;
        this.size[pu] += this.size[pv];
        return true;
    }

    connected(u: number, v: number) {
        return this.find(u) === this.find(v);
    }
}
class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    swimInWater(grid: number[][]): number {
        const n = grid.length;
        const dsu = new DSU(n * n);
        const directions = [
            [-1, 0],
            [1, 0],
            [0, -1],
            [0, 1],
        ];
        const arr = [];

        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                arr.push([grid[i][j], i, j]);
            }
        }
        arr.sort((a, b) => b[0] - a[0]);

        let res = 0;
        for (let k = 0; k < n * n; k++) {
            const [t, r, c] = arr.pop();
            res = t;
            for (let [dr, dc] of directions) {
                const nr = r + dr;
                const nc = c + dc;
                if (nr >= 0 && nr < n && nc >= 0 && nc < n && grid[nr][nc] <= t) {
                    dsu.union(r * n + c, nr * n + nc);
                }
            }
            if (dsu.connected(0, n * n - 1)) {
                break;
            }
        }
        return res;
    }
}
