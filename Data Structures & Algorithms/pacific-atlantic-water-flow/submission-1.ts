class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights: number[][]): number[][] {
        const ROWS = heights.length,
            COLS = heights[0].length;
        const pac = Array.from({ length: ROWS }, () => Array(COLS).fill(false));
        const atl = Array.from({ length: ROWS }, () => Array(COLS).fill(false));
        const directions = [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1],
        ];

        const dfs = (r: number, c: number, ocean: boolean[][]) => {
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
                    dfs(nr, nc, ocean);
                }
            }
        };
        for (let c = 0; c < COLS; c++) {
            dfs(0, c, pac);
            dfs(ROWS - 1, c, atl);
        }
        for (let r = 0; r < ROWS; r++) {
            dfs(r, 0, pac);
            dfs(r, COLS - 1, atl);
        }

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
