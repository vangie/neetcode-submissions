class DSU {
    private components: number;
    private parent: number[];
    private size: number[];

    constructor(n: number) {
        this.components = n;
        this.parent = Array.from({ length: n }, (_, i) => i);
        this.size = Array(n).fill(1);
    }

    find(x: number): number {
        if (this.parent[x] !== x) {
            this.parent[x] = this.find(this.parent[x]);
        }

        return this.parent[x];
    }

    union(u: number, v: number) {
        let pu = this.find(u),
            pv = this.find(v);

        if (pu === pv) return false;
        if (this.size[pv] > this.size[pu]) {
            [pu, pv] = [pv, pu];
        }

        this.parent[pv] = this.parent[pu];
        this.size[pu] += this.size[pv];
        this.components--;
    }
    getComponents() {
        return this.components;
    }
}

class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n: number, edges: number[][]): number {
        const dsu = new DSU(n);
        for (let [u, v] of edges) {
            dsu.union(u, v);
        }

        return dsu.getComponents();
    }
}
