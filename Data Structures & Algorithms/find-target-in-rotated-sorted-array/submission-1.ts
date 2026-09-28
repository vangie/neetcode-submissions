class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {
        let n = nums.length,
            minIdx = this.findMinIdx(nums),
            maxIdx = (n + minIdx - 1) % n;

        if (target >= nums[0] && target <= nums[maxIdx]) {
            return this.findTarget(nums, 0, maxIdx, target);
        } else if (target >= nums[minIdx] && target <= nums[n - 1]) {
            return this.findTarget(nums, minIdx, n - 1, target);
        } else {
            return -1;
        }
    }

    findTarget(nums: number[], l: number, r: number, target: number): number {
        while (l < r) {
            let m = l + ((r - l) >> 1);
            if (nums[m] < target) {
                l = m + 1;
            } else {
                r = m;
            }
        }

        return nums[l] === target ? l : -1;
    }

    findMinIdx(nums: number[]): number {
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

        return l;
    }
}
