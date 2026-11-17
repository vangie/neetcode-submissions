class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    findTargetSumWays(nums: number[], target: number): number {
        const memo = {};

        const dfs = (i: number, sum: number) => {
            if (i === nums.length) {
                return sum === target ? 1 : 0;
            }
            const key = `${i}-${sum}`;
            if (key in memo) {
                return memo[key];
            }

            const res = dfs(i + 1, sum - nums[i]) + dfs(i + 1, sum + nums[i]);
            memo[key] = res;
            return res;
        };

        return dfs(0, 0);
    }
}
