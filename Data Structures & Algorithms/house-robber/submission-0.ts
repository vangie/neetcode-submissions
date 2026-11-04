class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums: number[]): number {
        const cache = new Int32Array(nums.length + 2).fill(-1);
        const dfs = (i: number) => {
            if (i >= nums.length) return 0;
            if (cache[i] !== -1) return cache[i];

            cache[i] = Math.max(dfs(i + 1), nums[i] + dfs(i + 2));

            return cache[i];
        };
        return dfs(0);
    }
}
