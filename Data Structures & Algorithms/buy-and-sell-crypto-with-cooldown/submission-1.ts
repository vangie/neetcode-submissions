class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        const dp = {};
        const dfs = (day: number, canBuy: boolean) => {
            if (day >= prices.length) return 0;

            let key = `${day}-${canBuy}`;
            if(key in dp){
                return dp[key];
            }

            let skipProfit = dfs(day + 1, canBuy);
            let tradeProfit;
            if (canBuy) {
                tradeProfit = dfs(day + 1, false) - prices[day];
            } else {
                tradeProfit = dfs(day + 2, true) + prices[day];
            }
            dp[key] = Math.max(skipProfit, tradeProfit);
            return dp[key];
        };

        return dfs(0, true);
    }
}
