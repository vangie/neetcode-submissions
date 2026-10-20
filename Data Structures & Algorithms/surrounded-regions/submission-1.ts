class Solution {
    /**
     * @param {character[][]} board
     * @return {void} Do not return anything, modify board in-place instead.
     */
    solve(board: string[][]): void {
        const ROWS = board.length,
            COLS = board[0].length;
        const directions = [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1],
        ];
        const visited = Array.from({ length: ROWS }, () => Array(COLS).fill(false));

        const dfs = (r: number, c: number) => {
            if (r < 0 || c < 0 || r >= ROWS || c >= COLS || board[r][c] === "X" || visited[r][c]) {
                return;
            }
            visited[r][c] = true;
            for (let [dr, dc] of directions) {
                dfs(r + dr, c + dc);
            }
        };

        for (let r = 0; r < ROWS; r++) {
            dfs(r, 0);
            dfs(r, COLS - 1);
        }

        for (let c = 0; c < COLS; c++) {
            dfs(0, c);
            dfs(ROWS - 1, c);
        }

        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (board[r][c] === "O" && !visited[r][c]) {
                    board[r][c] = "X";
                }
            }
        }
    }
}
