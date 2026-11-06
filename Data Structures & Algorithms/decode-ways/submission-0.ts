class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    numDecodings(s: string): number {
        const n = s.length;
        const dp = Array(n + 1).fill(0);
        dp[0] = 1;

        for (let i = 1; i <= n; i++) {
            if (s[i - 1] !== "0") {
                dp[i] += dp[i - 1];
            }
            if (i >= 2) {
                const num = Number(s.slice(i - 2, i));
                if (num >= 10 && num <= 26) {
                    dp[i] += dp[i - 2];
                }
            }
        }

        return dp[n];
    }
}
