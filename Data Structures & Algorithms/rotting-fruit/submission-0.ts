class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid: number[][]): number {
        const ROWS = grid.length;
        const COLS = grid[0].length;
        const directions = [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1],
        ];
        const visited = Array.from({ length: ROWS }, () => Array(COLS).fill(false));
        let freshCount = 0;
        const q = new Queue();

        function addCell(r: number, c: number) {
            if (r < 0 || r >= ROWS || c < 0 || c >= COLS || grid[r][c] !== 1) {
                return;
            }
            grid[r][c] = 2;
            freshCount--;
            q.push([r, c]);
        }

        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (grid[r][c] == 1) {
                    freshCount++;
                } else if (grid[r][c] == 2) {
                    q.push([r, c]);
                }
            }
        }

        let min = 0;

        while (!q.isEmpty() && freshCount > 0) {
            for (let i = q.size(); i > 0; i--) {
                let [row, col] = q.pop();
                for (let [dr, dc] of directions) {
                    const nr = row + dr;
                    const nc = col + dc;

                    addCell(nr, nc);
                }
            }
            min++;
        }

        if (freshCount === 0) {
            return min;
        } else {
            return -1;
        }
    }
}
