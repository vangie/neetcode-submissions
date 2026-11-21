class Solution {
    /**
     * @param {number[][]} matrix
     * @return {number}
     */
    longestIncreasingPath(matrix: number[][]): number {
        const directions = [
            [-1, 0],
            [1, 0],
            [0, -1],
            [0, 1],
        ];
        const ROWS = matrix.length,
            COLS = matrix[0].length;

        let dp = Array.from({ length: ROWS }, () => Array(COLS).fill(-1));

        const dfs = (r, c, preVal) => {
            if (r < 0 || r >= ROWS || c < 0 || c >= COLS || matrix[r][c] <= preVal) {
                return 0;
            }

            if(dp[r][c] !== -1) return dp[r][c];

            let res = 1;
            for (let [dr, dc] of directions) {
                res = Math.max(res, 1 + dfs(r + dr, c + dc, matrix[r][c]));
            }
            return dp[r][c] = res;
        };
        let LIP = 0;
        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                LIP = Math.max(LIP, dfs(r, c, -Infinity));
            }
        }
        return LIP;
    }
}
