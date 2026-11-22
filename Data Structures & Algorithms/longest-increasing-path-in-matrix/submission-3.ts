class Solution {
    longestIncreasingPath(matrix: number[][]): number {
        const rows = matrix.length;
        const cols = matrix[0].length;
        const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];

        // 收集坐标，按格子里的数值从小到大处理
        const cells = matrix
    .flatMap((row, rowIndex) =>
        row.map((_, colIndex): [number, number] => [rowIndex, colIndex])
    )
    .sort(([r1, c1], [r2, c2]) => matrix[r1][c1] - matrix[r2][c2]);

        // 每个格子本身就是一条长度为 1 的路径
        const dp = Array.from({ length: rows }, () => Array<number>(cols).fill(1));
        let longest = 1;

        for (const [row, col] of cells) {
            for (const [dr, dc] of directions) {
                const nr = row + dr;
                const nc = col + dc;
                if (nr < 0 || nr >= rows || nc < 0 || nc >= cols) continue;

                if (matrix[nr][nc] < matrix[row][col]) {
                    dp[row][col] = Math.max(dp[row][col], dp[nr][nc] + 1);
                }
            }
            longest = Math.max(longest, dp[row][col]);
        }

        return longest;
    }
}