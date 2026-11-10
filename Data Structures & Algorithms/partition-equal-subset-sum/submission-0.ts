class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canPartition(nums: number[]): boolean {
        let sum = 0;
        for (const num of nums) sum += num;
        if (sum % 2 === 1) return false;

        const target = sum / 2;
        const memo = new Map<string, boolean>();

        const dfs = (i: number, remain: number) => {
            if (remain === 0) return true;
            if (i >= nums.length) return false;

            const key = `${i}-${remain}`;
            if (memo.has(key)) return memo.get(key);

            let res = false;

            if (nums[i] <= remain) {
                res = dfs(i + 1, remain - nums[i]);
            }
            if (!res) {
                res = dfs(i + 1, remain);
            }
            memo.set(key, res);
            return res;
        };

        return dfs(0, target);
    }
}
