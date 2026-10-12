class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n: number): string[] {
        const res: string[] = [];

        const dfs = (cur: string[], l: number, r: number) => {
            if (cur.length === n * 2) {
                res.push(cur.join(""));
                return;
            }
            if (l < n) {
                cur.push("(");
                dfs(cur, l + 1, r);
                cur.pop();
            }
            if (r < l) {
                cur.push(")");
                dfs(cur, l, r + 1);
                cur.pop();
            }
        };
        dfs([], 0, 0);
        return res;
    }
}
