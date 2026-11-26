class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {number}
     */
    minDistance(word1: string, word2: string): number {
        const m = word1.length,
            n = word2.length;

        const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

        for (let i = 0; i <= m; i++) {
            dp[i][n] = m - i;
        }
        for (let j = 0; j <= n; j++) {
            dp[m][j] = n - j;
        }

        for (let i = m - 1; i >= 0; i--) {
            for (let j = n - 1; j >= 0; j--) {
                if(word1[i] === word2[j]){
                    dp[i][j] = dp[i+1][j+1]
                } else {
                    dp[i][j] = 1 + Math.min(
                        dp[i+1][j],
                        dp[i][j+1],
                        dp[i+1][j+1]
                    )
                }
            }
        }

        return dp[0][0];
    }
}
