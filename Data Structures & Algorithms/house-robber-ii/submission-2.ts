class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums: number[]): number {
        return Math.max(
            nums[0],
            Math.max(this.helper(nums.slice(1)), this.helper(nums.slice(0, -1))));
    }

    helper(nums) {
        let rob1 = 0;
        let rob2 = 0;
        for (const num of nums) {
            const newRob = Math.max(rob1 + num, rob2);
            rob1 = rob2;
            rob2 = newRob;
        }
        return rob2;
    }
}
