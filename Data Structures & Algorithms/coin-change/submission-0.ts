class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins: number[], amount: number): number {
        const memo = new Map<number, number>();
        const dfs = (a: number) => {
            if (a == 0) return 0;
            if (a < 0) return -1;
            if (memo.has(a)) return memo.get(a);
            let min = Infinity;

            for (const coin of coins) {
                const res = dfs(a - coin);

                if (res !== -1) {
                    min = Math.min(min, res + 1);
                }
            }

            const ans = min === Infinity ? -1 : min;
            memo.set(a, ans);

            return ans;
        };

        return dfs(amount);
    }
}
