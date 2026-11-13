class Solution {
    /**
     * @param {string} text1
     * @param {string} text2
     * @return {number}
     */
    longestCommonSubsequence(text1: string, text2: string): number {
        const n1 = text1.length;
        const n2 = text2.length;
        const dp = Array.from({ length: n1 + 1 }, () => Array(n2 + 1).fill(0));

        for (let i = n1 - 1; i >= 0; i--) {
            for (let j = n2 - 1; j >= 0; j--) {
                if (text1[i] === text2[j]) {
                    dp[i][j] = 1 + dp[i + 1][j + 1];
                } else {
                    dp[i][j] = Math.max(dp[i][j + 1], dp[i + 1][j]);
                }
            }
        }

        return dp[0][0];
    }
}
