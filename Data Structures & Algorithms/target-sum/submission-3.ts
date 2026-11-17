class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    findTargetSumWays(nums: number[], target: number): number {
        const n = nums.length;
        let dp = Array.from({ length: n + 1 }, () => ({}));
        dp[0][0] = 1;

        for (let i = 0; i < n; i++) {
            for (let total in dp[i]) {
                const totalNum = Number(total);
                let count = dp[i][total];
                const plusSum = totalNum + nums[i];
                const minusSum = totalNum - nums[i];
                dp[i + 1][plusSum] = (dp[i + 1][plusSum] ?? 0) + count;
                dp[i + 1][minusSum] = (dp[i + 1][minusSum] ?? 0) + count;
            }
        }
        return dp[n][target] ?? 0;
    }
}
