class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    findTargetSumWays(nums: number[], target: number): number {
        let dp = new Map();
        dp.set(0, 1);

        for (let num of nums) {
            let nextDp = new Map();
            for (let [total, count] of dp) {
                nextDp.set(total - num, (nextDp.get(total - num) ?? 0) + count);
                nextDp.set(total + num, (nextDp.get(total + num) ?? 0) + count);
            }
            dp = nextDp;
        }

        return dp.get(target) || 0;
    }
}
