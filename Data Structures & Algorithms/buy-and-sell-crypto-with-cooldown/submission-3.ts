class Solution {
    maxProfit(prices: number[]): number {
        // 每轮开始时，这些变量分别代表明天、后天的状态
        let nextCanBuyProfit = 0;
        let nextHoldingProfit = 0;
        let afterNextCanBuyProfit = 0;

        for (let day = prices.length - 1; day >= 0; day--) {
            // 今天没有股票：买入，或者等待
            const canBuyProfit = Math.max(
                nextHoldingProfit - prices[day],
                nextCanBuyProfit
            );

            // 今天持有股票：卖出，或者等待
            const holdingProfit = Math.max(
                afterNextCanBuyProfit + prices[day],
                nextHoldingProfit
            );

            // 向前移动一天，为下一轮准备状态
            afterNextCanBuyProfit = nextCanBuyProfit;
            nextCanBuyProfit = canBuyProfit;
            nextHoldingProfit = holdingProfit;
        }

        // 最后一轮处理第 0 天，更新后保存的就是第 0 天的结果
        return nextCanBuyProfit;
    }
}