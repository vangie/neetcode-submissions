class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    numDecodings(s: string): number {
        let dp2 = 0,
            dp1 = 1,
            dp = 0;

        for (let i = s.length - 1; i >= 0; i--) {
            if (s[i] === "0") {
                dp = 0;
            } else {
                dp = dp1;
                if (i + 1 < s.length && (s[i] === "1" || (s[i] === "2" && s[i + 1] < "7"))) {
                    dp += dp2;
                }
            }

            [dp, dp1, dp2] = [0, dp, dp1];
        }

        return dp1;
    }
}
