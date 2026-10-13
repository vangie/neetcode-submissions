class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board: string[][], word: string): boolean {
        const m = board.length,
            n = board[0].length;
        let found = false;

        const dfs = (mark: number, cur: string[], i: number, j: number, idx: number): boolean => {
            // 当前字符不匹配
            if (board[i][j] !== word[idx]) {
                return;
            }

            // 已经找到完整单词
            if (idx === word.length - 1) {
                found = true;
                return;
            }

            if (!found && i - 1 >= 0 && (mark & (1 << ((i - 1) * n + j))) === 0) {
                cur.push(board[i - 1][j]);
                dfs(mark | (1 << ((i - 1) * n + j)), cur, i - 1, j, idx + 1);
                cur.pop();
            }
            if (!found && i + 1 < m && (mark & (1 << ((i + 1) * n + j))) === 0) {
                cur.push(board[i + 1][j]);
                dfs(mark | (1 << ((i + 1) * n + j)), cur, i + 1, j, idx + 1);
                cur.pop();
            }
            if (!found && j - 1 >= 0 && (mark & (1 << (i * n + j - 1))) === 0) {
                cur.push(board[i][j - 1]);
                dfs(mark | (1 << (i * n + j - 1)), cur, i, j - 1, idx + 1);
                cur.pop();
            }
            if (!found && j + 1 < n && (mark & (1 << (i * n + j + 1))) === 0) {
                cur.push(board[i][j + 1]);
                dfs(mark | (1 << (i * n + j + 1)), cur, i, j + 1, idx + 1);
                cur.pop();
            }
        };

        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                dfs(1 << (i * n + j), [board[i][j]], i, j, 0);

                if (found) {
                    return true;
                }
            }
        }
        return false;
    }
}
