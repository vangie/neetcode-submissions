class Solution {
    /**
     * @param {number} amount
     * @param {number[]} coins
     * @return {number}
     */
    change(amount: number, coins: number[]): number {
        coins.sort((a, b) => a - b);
        const n = coins.length;
        const dp = Array.from({ length: n + 1 }, () => Array(amount + 1).fill(0));

        for (let i = 0; i <= n; i++) {
            dp[i][0] = 1;
        }

        for (let i = n - 1; i >= 0; i--) {
            for (let a = 0; a <= amount; a++) {
                if (a >= coins[i]) {
                    dp[i][a] = dp[i + 1][a];
                    dp[i][a] += dp[i][a - coins[i]];
                }
            }
        }

        return dp[0][amount];
    }
}
