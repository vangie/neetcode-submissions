class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {number}
     */
    numDistinct(s: string, t: string): number {
        let m = s.length,
            n = t.length;
        let dp = new Array(n + 1).fill(0);
        dp[n] = 1;
        for (let i = m - 1; i >= 0; i--) {
            let nextDp = new Array(n + 1).fill(0);
            nextDp[n] = 1;
            for (let j = n - 1; j >= 0; j--) {
                nextDp[j] = dp[j];
                if (s[i] === t[j]) {
                    nextDp[j] += dp[j + 1];
                }
            }
            dp = nextDp;
        }

        return dp[0];
    }
}
