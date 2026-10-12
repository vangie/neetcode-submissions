class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n: number): string[] {
        const res: string[] = [];

        const dfs = (cur: string[], l: number, r: number, i: number) => {
            if (l - r < 0 || l > n || r > n) {
                return;
            }
            if (i === n * 2) {
                res.push(cur.join(""));
                return;
            }
            cur.push("(");
            dfs(cur, l + 1, r, i + 1);
            cur.pop();
            cur.push(")");
            dfs(cur, l, r + 1, i + 1);
            cur.pop();
        };
        dfs([], 0, 0, 0);
        return res;
    }
}
