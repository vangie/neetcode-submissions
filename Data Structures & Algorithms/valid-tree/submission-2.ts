class DSU {
    private _components: number;
    private parent: number[];
    private size: number[];
    constructor(n: number) {
        this._components = n;
        this.parent = Array.from({ length: n }, (_, i) => i);
        this.size = Array(n).fill(1);
    }

    find(node: number): number {
        if (this.parent[node] != node) {
            this.parent[node] = this.find(this.parent[node]);
        }
        return this.parent[node];
    }

    union(u: number, v: number): boolean {
        let pu = this.find(u);
        let pv = this.find(v);

        if (pu === pv) return false;
        if (this.size[pu] < this.size[pv]) {
            [pu, pv] = [pv, pu];
        }
        this._components--;
        this.size[pu] += this.size[pv];
        this.parent[pv] = pu;
        return true;
    }

    get component(): number {
        return this._components;
    }
}

class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n: number, edges: number[][]): boolean {
        if (edges.length > n - 1) {
            return false;
        }
        const dsu = new DSU(n);
        for (const [u, v] of edges) {
            if (!dsu.union(u, v)) {
                return false;
            }
        }
        return dsu.component === 1;
    }
}
