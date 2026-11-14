class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        const n = prices.length;
        const dp = Array.from({ length: n + 2 }, () => [0, 0]);

        for (let day = n - 1; day >= 0; day--) {
            for (let canBuy = 1; canBuy >= 0; canBuy--) {
                const skipProfit = dp[day + 1][canBuy];
                let tradeProfit: number;
                if (canBuy) {
                    tradeProfit = dp[day + 1][0] - prices[day];
                } else {
                    tradeProfit = dp[day + 2][1] + prices[day];
                }
                dp[day][canBuy] = Math.max(skipProfit, tradeProfit);
            }
        }
        return dp[0][1];
    }
}
