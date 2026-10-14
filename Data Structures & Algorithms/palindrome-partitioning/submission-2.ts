class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     */
    partition(s: string): string[][] {
        const n = s.length;
        const dp = Array.from({ length: n }, () => Array(n).fill(false));

        for (let l = 1; l <= n; l++) {
            for (let i = 0; i <= n - l; i++) {
                dp[i][i + l - 1] =
                    s[i] === s[i + l - 1] && (i + 1 > i + l - 2 || dp[i + 1][i + l - 2]);
            }
        }

        const res = [];
        const part = [];
        const dfs = (i) => {
            if (i >= s.length) {
                res.push([...part]);
                return;
            }
            for (let j = i; j < s.length; j++) {
                if (dp[i][j]) {
                    part.push(s.substring(i, j + 1));
                    dfs(j + 1);
                    part.pop();
                }
            }
        };
        dfs(0);
        return res;
    }
}
