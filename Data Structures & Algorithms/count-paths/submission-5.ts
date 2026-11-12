class Solution {
    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    uniquePaths(m: number, n: number): number {
        if (m == 1 || n == 1) return 1;
        if (m < n) [m, n] = [n, m];

        let res = 1;
        for (let i = m,j=1; i < m + n - 1; i++,j++) {
            res *= i;
            res = res / j;
        }

        return res;
    }
}
