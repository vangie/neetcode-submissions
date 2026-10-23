class DSU {
    private parent: number[];
    private size: number[];

    constructor(n: number) {
        this.parent = Array.from({ length: n }, (_, i) => i);
        this.size = Array(n).fill(1);
    }

    find(node: number) {
        if (this.parent[node] !== node) {
            this.parent[node] = this.find(this.parent[node]);
        }
        return this.parent[node];
    }

    union(u: number, v: number) {
        let pu = this.find(u),
            pv = this.find(v);
        if (pu === pv) return false;
        if (this.size[pv] > this.size[pu]) {
            [pv, pu] = [pu, pv];
        }
        this.parent[pv] = this.parent[pu];
        this.size[pu] += this.size[pv];
        return true;
    }
}
class Solution {
    /**
     * @param {number[][]} edges
     * @return {number[]}
     */
    findRedundantConnection(edges: number[][]): number[] {
        const n = edges.length;
        const dsu = new DSU(n);
        for (const [u, v] of edges) {
            if (!dsu.union(u, v)) {
                return [u, v];
            }
        }
    }
}
