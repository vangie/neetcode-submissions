class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let minPrice = prices[0];
        let res = 0;
        for(let i=1;i<prices.length;i++){
            minPrice = Math.min(minPrice, prices[i]);
            res = Math.max(res, prices[i] - minPrice);
        }
        return res;
    }
}
