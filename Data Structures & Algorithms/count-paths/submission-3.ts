class Solution {
    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    uniquePaths(m: number, n: number): number {
        if (m == 1 || n == 1) return 1;
        if (m < n) [m, n] = [n, m];

        let res = 1,
            j = 1;
        for (let i = m; i < m + n - 1; i++) {
            res *= i;
            res = Math.floor(res / j);
            j++;
        }

        return res;
    }
}
