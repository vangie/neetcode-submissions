class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums: number[]): number {
        const n = nums.length;
        let l = 0,
            r = nums.length - 1;
        while (l < r) {
            let m = l + ((r - l) >> 1);
            if (nums[m] > nums[r]) {
                l = m + 1;
            } else {
                r = m;
            }
        }

        return nums[l];
    }
}
