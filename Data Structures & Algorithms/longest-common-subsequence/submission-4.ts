class Solution {
    /**
     * @param {string} text1
     * @param {string} text2
     * @return {number}
     */
    longestCommonSubsequence(text1: string, text2: string): number {
        let n1 = text1.length;
        let n2 = text2.length;

        if (n1 < n2) {
            [text1, text2] = [text2, text1];
            [n1, n2] = [n2, n1];
        }

        let dp = Array(n2 + 1).fill(0);

        for (let i = n1 - 1; i >= 0; i--) {
            let prev = 0;
            for (let j = n2 - 1; j >= 0; j--) {
                let temp = dp[j];
                if (text1[i] == text2[j]) {
                    dp[j] = 1 + prev;
                } else {
                    dp[j] = Math.max(dp[j + 1], dp[j]);
                }
                prev = temp;
            }
        }

        return dp[0];
    }
}
