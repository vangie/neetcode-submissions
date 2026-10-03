class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums: number[]): number {
        let n = nums.length;
        let low = 1,
            high = n - 1;

        while (low < high) {
            let mid = Math.floor(low + (high - low) / 2);
            let lessOrEqual = 0;

            for (let i = 0; i < n; i++) {
                if (nums[i] <= mid) {
                    lessOrEqual++;
                }
            }

            if (lessOrEqual <= mid) {
                low = mid + 1;
            } else {
                high = mid;
            }
        }

        return low;
    }
}
