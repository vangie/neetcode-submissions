class Solution {
    /**
     * @param {number} amount
     * @param {number[]} coins
     * @return {number}
     */
    change(amount: number, coins: number[]): number {
        let dp = new Array(amount + 1).fill(0);
        dp[0] = 1;
        for (let i = coins.length - 1; i >= 0; i--) {
            const nextDP = new Array(amount + 1).fill(0);
            nextDP[0] = 1;
            for (let a = 1; a <= amount; a++) {
                nextDP[a] = dp[a];
                if (a - coins[i] >= 0) {
                    nextDP[a] += nextDP[a - coins[i]];
                }
            }
            dp = nextDP;
        }
        return dp[amount];
    }
}
