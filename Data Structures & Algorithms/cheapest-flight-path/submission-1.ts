class Solution {
    /**
     * @param {number} n
     * @param {number[][]} flights
     * @param {number} src
     * @param {number} dst
     * @param {number} k
     * @return {number}
     */
    findCheapestPrice(n: number, flights: number[][], src: number, dst: number, k: number) {
        let prices = new Array(n).fill(Infinity);
        prices[src] = 0;

        for (let i = 0; i <= k; i++) {
            const tmpPrices = [...prices];
            for (const [src, dst, price] of flights) {
                if (prices[src] === Infinity) continue;
                if (prices[src] + price < tmpPrices[dst]) {
                    tmpPrices[dst] = prices[src] + price;
                }
            }
            prices = tmpPrices;
        }

        return prices[dst] === Infinity ? -1 : prices[dst];
    }
}
