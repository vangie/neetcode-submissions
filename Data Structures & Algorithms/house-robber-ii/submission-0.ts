class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums: number[]): number {
        const n = nums.length;
        if (n === 1) return nums[0];
        const memo = Array.from({ length: n }, () => Array(2).fill(-1));

        const dfs = (i: number, flag: number) => {
            if (i >= n || (flag && i === n - 1)) return 0;
            if (memo[i][flag] !== -1) return memo[i][flag];

            memo[i][flag] = Math.max(
                dfs(i + 1, flag),
                nums[i] + dfs(i + 2, flag),
            );

            return memo[i][flag];
        };

        return Math.max(dfs(0, 1), dfs(1, 0));
    }
}
