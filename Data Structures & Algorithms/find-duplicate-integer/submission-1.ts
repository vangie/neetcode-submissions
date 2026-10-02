class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums: number[]): number {
        let n = nums.length;
        let res = 0;
        for (let b = 0; b < 32; b++) {
            let x = 0,
                y = 0;
            let mask = 1 << b;
            for (let num of nums) {
                if (num & mask) {
                    x++;
                }
            }
            for (let num = 1; num < n; num++) {
                if (num & mask) {
                    y++;
                }
            }
            if (x > y) {
                res |= mask;
            }
        }
        return res;
    }
}
