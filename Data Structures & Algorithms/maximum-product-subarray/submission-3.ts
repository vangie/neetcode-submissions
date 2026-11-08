class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums: number[]): number {
        let n = nums.length;
        let res = nums[0];
        let prefix = 0,
            suffix = 0;
        for (let i = 0; i < n; i++) {
            prefix = nums[i] * (prefix === 0 ? 1 : prefix);
            suffix = nums[n - 1 - i] * (suffix === 0 ? 1 : suffix);
            res = Math.max(res, prefix, suffix);
        }

        return res === -0 ? 0 : res;
    }
}
