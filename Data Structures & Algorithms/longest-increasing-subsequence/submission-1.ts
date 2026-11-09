class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    lengthOfLIS(nums: number[]): number {
        const n = nums.length;
        const memo = Array.from({ length: n }, () => Array(n + 1).fill(-1));

        const dfs = (i: number, j: number) => {
            if (i === nums.length) return 0;
            if (memo[i][j + 1] != -1) return memo[i][j + 1];

            let res = dfs(i + 1, j);

            if (j === -1 || nums[j] < nums[i]) {
                res = Math.max(res, 1 + dfs(i + 1, i));
            }

            return (memo[i][j + 1] = res);
        };
        return dfs(0, -1);
    }
}
