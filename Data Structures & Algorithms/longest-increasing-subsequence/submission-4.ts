class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    lengthOfLIS(nums: number[]): number {
        const dp = new Array(nums.length).fill(1);

        for (let i = nums.length - 1; i >= 0; i--) {
            for (let j = i + 1; j < nums.length; j++) {
                if (nums[i] < nums[j]) {
                    dp[i] = Math.max(dp[i], 1 + dp[j]);
                }
            }
        }

        return Math.max(...dp);
    }
}
