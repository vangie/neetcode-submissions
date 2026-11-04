class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums: number[]): number {
        let rob1 = 0; // i-2
        let rob2 = 0; // i-1
        for (const num of nums) {
            [rob1, rob2] = [rob2, Math.max(num + rob1, rob2)];
        }

        return rob2;
    }
}
