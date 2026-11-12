class Solution {
    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    uniquePaths(m: number, n: number): number {
        let row = new Array(n).fill(1);

        for (let i = 1; i < m; i++) {
            const newRow = new Array(n).fill(1);
            for (let j = 1; j < n; j++) {
                newRow[j] = newRow[j - 1] + row[j];
            }
            row = newRow;
        }

        return row[n - 1];
    }
}
