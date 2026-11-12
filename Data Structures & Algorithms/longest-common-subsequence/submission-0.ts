class Solution {
    /**
     * @param {string} text1
     * @param {string} text2
     * @return {number}
     */
    longestCommonSubsequence(text1: string, text2: string): number {
        const n1 = text1.length;
        const n2 = text2.length;
        const memo = Array.from({ length: n1 }, () => Array(n2).fill(-1));

        const dfs = (i: number, j: number) => {
            if (i === n1 || j === n2) return 0;
            if (memo[i][j] !== -1) return memo[i][j];
            if (text1[i] == text2[j]) {
                memo[i][j] = 1 + dfs(i + 1, j + 1);
            } else {
                memo[i][j] = Math.max(dfs(i + 1, j), dfs(i, j + 1));
            }
            return memo[i][j];
        };

        return dfs(0, 0);
    }
}
