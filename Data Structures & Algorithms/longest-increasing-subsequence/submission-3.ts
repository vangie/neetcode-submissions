class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    lengthOfLIS(nums: number[]): number {
        const n = nums.length;
        const memo = new Array(n).fill(-1);

        const dfs = (i: number) => {
            if (memo[i] != -1) return memo[i];

            let res = 1;
            for (let j = i + 1; j < n; j++) {
                if (nums[i] < nums[j]) {
                    res = Math.max(res, 1 + dfs(j));
                }
            }
            return (memo[i] = res);
        };

        return Math.max(...nums.map((_, i) => dfs(i)));
    }
}
