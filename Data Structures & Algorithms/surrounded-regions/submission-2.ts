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

        const q = new Queue();
        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (
                    r === 0 ||
                    r === ROWS - 1 ||
                    c === 0 ||
                    (c === COLS - 1 && board[r][c] === "O")
                ) {
                    q.push([r, c]);
                }
            }
        }

        while (!q.isEmpty()) {
            let [r, c] = q.pop();
            if (board[r][c] === "O") {
                board[r][c] = "T";
                for (let [dr, dc] of directions) {
                    let nr = r + dr,
                        nc = c + dc;
                    if (nr >= 0 && nr < ROWS && nc >= 0 && nc < COLS) {
                        q.push([nr, nc]);
                    }
                }
            }
        }

        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (board[r][c] === "O") board[r][c] = "X";
                else if (board[r][c] === "T") board[r][c] = "O";
            }
        }
    }
}
