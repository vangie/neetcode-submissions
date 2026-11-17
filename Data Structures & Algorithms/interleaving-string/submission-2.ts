class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @param {string} s3
     * @return {boolean}
     */
    isInterleave(s1: string, s2: string, s3: string): boolean {
        const n1 = s1.length,
            n2 = s2.length,
            n3 = s3.length;
        if (n1 + n2 !== n3) return false;
        const dp = Array.from({ length: n1 + 1 }, () => Array(n2 + 1).fill(false));

        dp[0][0] = true;

        // 只使用 s2
        for (let i2 = 1; i2 <= n2; i2++) {
            dp[0][i2] = dp[0][i2 - 1] && s2[i2 - 1] === s3[i2 - 1];
        }

        // 只使用 s1
        for (let i1 = 1; i1 <= n1; i1++) {
            dp[i1][0] = dp[i1 - 1][0] && s1[i1 - 1] === s3[i1 - 1];
        }

        for (let i1 = 1; i1 <= n1; i1++) {
            for (let i2 = 1; i2 <= n2; i2++) {
                const i3 = i1 + i2 - 1;
                dp[i1][i2] ||= dp[i1 - 1][i2] && s1[i1 - 1] === s3[i3];
                dp[i1][i2] ||= dp[i1][i2 - 1] && s2[i2 - 1] === s3[i3];
            }
        }

        return dp[n1][n2];
    }
}
