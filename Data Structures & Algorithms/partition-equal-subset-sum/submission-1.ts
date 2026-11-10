class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canPartition(nums: number[]): boolean {
        let sum = nums.reduce((a, b) => a + b, 0);
        if (sum % 2 !== 0) return false;
        const target = sum / 2;
        const n = nums.length;

        const dp = Array.from({ length: n + 1 }, () => Array(target + 1).fill(false));

        for (let i = 0; i <= n; i++) {
            dp[i][0] = true;
        }

        for (let i = 1; i <= n; i++) {
            for (let j = 1; j <= target; j++) {
                if (nums[i - 1] <= j) {
                    dp[i][j] = dp[i - 1][j] || dp[i - 1][j - nums[i - 1]];
                } else {
                    dp[i][j] = dp[i - 1][j];
                }
            }
        }

        return dp[n][target];
    }
}
