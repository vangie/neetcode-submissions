class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let nextCanbuyProfit = 0;
        let nextHoldingProfit = 0;
        let afterNextCanbuyProfit = 0;

        for (let day = prices.length - 1; day >= 0; day--) {
            let canbuyProfit = Math.max(nextHoldingProfit - prices[day], nextCanbuyProfit);
            let holdingProfit = Math.max(nextHoldingProfit, afterNextCanbuyProfit + prices[day]);

            [nextCanbuyProfit, nextHoldingProfit, afterNextCanbuyProfit] = [
                canbuyProfit,
                holdingProfit,
                nextCanbuyProfit,
            ];
        }
        return nextCanbuyProfit;
    }
}
