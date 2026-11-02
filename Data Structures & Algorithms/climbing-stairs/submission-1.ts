class Solution {
    private mp = new Map<number, number>();
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n: number): number {
        if (n == 1) return 1;
        if (n == 2) return 2;
        let res = this.mp.get(n);
        if (!res) {
            res = this.climbStairs(n - 1) + this.climbStairs(n - 2);
        }
        this.mp.set(n, res);
        return res;
    }
}
