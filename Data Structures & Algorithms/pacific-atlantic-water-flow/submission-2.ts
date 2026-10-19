class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights: number[][]): number[][] {
        const ROWS = heights.length,
            COLS = heights[0].length;
        const directions = [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1],
        ];
        const pac = Array.from({ length: ROWS }, () => Array(COLS).fill(false));
        const atl = Array.from({ length: ROWS }, () => Array(COLS).fill(false));

        const pacQueue = new Queue();
        const atlQueue = new Queue();
        for (let c = 0; c < COLS; c++) {
            pacQueue.push([0, c]);
            atlQueue.push([ROWS - 1, c]);
        }
        for (let r = 0; r < ROWS; r++) {
            pacQueue.push([r, 0]);
            atlQueue.push([r, COLS - 1]);
        }

        const bfs = (queue: typeof Queue, ocean: boolean[][], heights: number[][]) => {
            while (!queue.isEmpty()) {
                let [r, c] = queue.pop();
                ocean[r][c] = true;
                for (let [dr, dc] of directions) {
                    let nr = r + dr,
                        nc = c + dc;
                    if (
                        nr >= 0 &&
                        nr < ROWS &&
                        nc >= 0 &&
                        nc < COLS &&
                        !ocean[nr][nc] &&
                        heights[nr][nc] >= heights[r][c]
                    ) {
                        queue.push([nr, nc]);
                    }
                }
            }
        };
        bfs(pacQueue, pac, heights);
        bfs(atlQueue, atl, heights);

        let res = [];
        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (pac[r][c] && atl[r][c]) {
                    res.push([r, c]);
                }
            }
        }
        return res;
    }
}
