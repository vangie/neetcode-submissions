class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {
        let l = 0,
            r = nums.length;

        while (l < r) {
            let m = l + ((r - l) >> 1);
            if (nums[m] > target) {
                r = m;
            } else {
                l = m + 1;
            }
        }

        return l > 0 && nums[l - 1] === target ? l - 1 : -1;
    }
}
