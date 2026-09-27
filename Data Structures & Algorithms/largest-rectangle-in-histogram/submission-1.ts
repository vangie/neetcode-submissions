class SegTree {
    private arr: number[];
    private tree: number[];
    private size: number;

    constructor(size: number, heights: number[]) {
        this.size = size;
        this.arr = heights.slice();
        while ((this.size & (this.size - 1)) !== 0) {
            this.arr.push(Infinity);
            this.size++;
        }
        this.tree = new Array(2 * this.size).fill(0);
        this.build();
    }

    private build(): void {
        for (let i = 0; i < this.size; i++) {
            this.tree[this.size + i] = i;
        }
        for (let j = this.size - 1; j >= 1; j--) {
            let a = this.tree[j << 1];
            let b = this.tree[(j << 1) + 1];
            this.tree[j] = this.arr[a] <= this.arr[b] ? a : b;
        }
    }

    public update(i: number, val: number): void {
        this.arr[i] = val;
        for (let j = (this.size + i) >> 1; j >= 1; j >>= 1) {
            let a = this.tree[j << 1];
            let b = this.tree[(j << 1) + 1];
            this.tree[j] = this.arr[a] <= this.arr[b] ? a : b;
        }
    }

    // 对外接口：查原数组闭区间 [queryL, queryR] 的最小值下标
    public query(queryL: number, queryR: number): number {
        // 从根出发。根的编号是 1，根覆盖整段 [0, n-1]
        return this._query(1, 0, this.size - 1, queryL, queryR);
    }

    /**
     * node     当前站在树的哪一格（用来读 this.tree[node]）
     * coverL   这一格负责的原数组左端
     * coverR   这一格负责的原数组右端
     * queryL   用户要问的左端（递归过程中不变）
     * queryR   用户要问的右端（递归过程中不变）
     *
     * 返回值：cover 和 query 交集里，A 最小的那个原数组下标
     *         没有交集时返回 INF
     */
    private _query(node: number, coverL: number, coverR: number, queryL: number, queryR: number) {
        // 情况 1：询问在当前段左边，或在当前段右边 → 没交集
        // 例：当前管 [0,1]，询问 [2,3]
        if (queryL > coverR || queryR < coverL) {
            return Infinity;
        }

        // 情况 2：当前整段都在询问里面 → 建树时已经算好了，直接用
        // 例：当前管 [2,3]，询问 [1,3]
        if (coverL >= queryL && coverR <= queryR) {
            return this.tree[node];
        }

        // 情况 3：两段部分重叠 → 不能整包取走，把当前段从中间切开
        // 左儿子管 [coverL, mid]，编号 node*2
        // 右儿子管 [mid+1, coverR]，编号 node*2+1
        const mid = (coverL + coverR) >> 1;

        const leftIdx = this._query(
            node << 1, // 左儿子
            coverL,
            mid, // 左半段
            queryL,
            queryR,
        );

        const rightIdx = this._query(
            (node << 1) + 1, // 右儿子
            mid + 1,
            coverR, // 右半段
            queryL,
            queryR,
        );

        // 某一边没交集时，INF 不能拿去下标访问 A，直接丢弃
        if (leftIdx === Infinity) return rightIdx;
        if (rightIdx === Infinity) return leftIdx;

        // 两边都有答案：比的是 A 里的值，返回的是下标
        // <= 保证相等时取左边那个下标
        return this.arr[leftIdx] <= this.arr[rightIdx] ? leftIdx : rightIdx;
    }
}

class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights: number[]): number {
        const n = heights.length;
        const st = new SegTree(n, heights);
        return this.getMaxArea(heights, 0, n - 1, st);
    }

    getMaxArea(heights: number[], l: number, r: number, st: SegTree): number {
        if (l > r) return 0;
        if (l === r) return heights[l];
        const minIdx = st.query(l, r);
        return Math.max(
            this.getMaxArea(heights, l, minIdx - 1, st),
            this.getMaxArea(heights, minIdx + 1, r, st),
            (r - l + 1) * heights[minIdx],
        );
    }
}
