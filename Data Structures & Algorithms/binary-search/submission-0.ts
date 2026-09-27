class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {
        return this.binarySearch(nums, 0, nums.length - 1, target);
    }

    private binarySearch(nums: number[], start: number, end: number, target: number) {
        if (start > end) return -1;

        const mid = start + ((end - start) >> 1);
        if (nums[mid] === target) return mid;
        if (target < nums[mid]) {
            return this.binarySearch(nums, start, mid - 1, target);
        }
        return this.binarySearch(nums, mid + 1, end, target);
    }
}
