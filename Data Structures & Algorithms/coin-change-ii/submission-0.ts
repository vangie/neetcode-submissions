class Solution {
    /**
     * @param {number} amount
     * @param {number[]} coins
     * @return {number}
     */
    change(amount: number, coins: number[]): number {
        const memo: Record<string, number> = {};
        coins.sort((a, b) => a - b);

        const dfs = (remain: number, index: number) => {
            if (remain === 0) return 1;
            if (remain < 0 || index == coins.length) return 0;
            const key = `${remain}-${index}`;
            if (key in memo) {
                return memo[key];
            }
            let res = dfs(remain - coins[index], index);
            res += dfs(remain, index + 1);
            memo[key] = res;
            return res;
        };

        return dfs(amount, 0);
    }
}
