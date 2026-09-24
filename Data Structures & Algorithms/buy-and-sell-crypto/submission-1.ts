class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let n = prices.length;
        let prefixMin = new Array(n).fill(0),
            suffixMax = new Array(n).fill(0);

        prefixMin[0] = prices[0];
        for (let i = 1; i < n; i++) {
            prefixMin[i] = Math.min(prefixMin[i - 1], prices[i]);
        }

        suffixMax[n - 1] = prices[n - 1];
        for (let i = n - 2; i >= 0; i--) {
            suffixMax[i] = Math.max(suffixMax[i + 1], prices[i]);
        }

        let res = 0;
        for (let i = 0; i < n; i++) {
            res = Math.max(suffixMax[i] - prefixMin[i], res);
        }
        return res;
    }
}
