class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins: number[], amount: number): number {
        if (amount === 0) return 0;
        const q = new Queue([0]);
        const seen = new Array(amount + 1).fill(false);
        seen[0] = true;
        let res = 0;
        while (!q.isEmpty()) {
            res++;
            for (let i = q.size(); i > 0; i--) {
                const cur = q.pop();
                for (const coin of coins) {
                    const nxt = cur + coin;
                    if (nxt === amount) return res;
                    if (nxt > amount || seen[nxt]) continue;
                    seen[nxt] = true;
                    q.push(nxt);
                }
            }
        }

        return -1;
    }
}
