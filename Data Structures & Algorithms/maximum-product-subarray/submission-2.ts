class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums: number[]): number {
        let res = nums[0];
        let curMin = 1;
        let curMax = 1;

        for (const num of nums) {
            [curMax, curMin] = [
                Math.max(num * curMax, num * curMin, num),
                Math.min(num * curMax, num * curMin, num),
            ];
            res = Math.max(res, curMax);
        }

        return res;
    }
}
