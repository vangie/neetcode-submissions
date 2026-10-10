class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums: number[], k: number): number {
        function partition(left: number, right: number): number {
            const mid = left + ((right - left) >> 1);
            [nums[mid], nums[left + 1]] = [nums[left + 1], nums[mid]];

            if (nums[left] < nums[right]) [nums[left], nums[right]] = [nums[right], nums[left]];
            if (nums[left + 1] < nums[right])
                [nums[left + 1], nums[right]] = [nums[right], nums[left + 1]];
            if (nums[left] < nums[left + 1])
                [nums[left], nums[left + 1]] = [nums[left + 1], nums[left]];

            const pivot = nums[left + 1];
            let i = left + 1,
                j = right;

            while (true) {
                while (nums[++i] > pivot);
                while (nums[--j] < pivot);
                if (i > j) break;
                [nums[i], nums[j]] = [nums[j], nums[i]];
            }
            nums[left + 1] = nums[j];
            nums[j] = pivot;
            return j;
        }

        function quickSelect(k: number): number {
            let left = 0;
            let right = nums.length - 1;

            while (true) {
                if (right <= left + 1) {
                    if (right == left + 1 && nums[right] > nums[left])
                        [nums[left], nums[right]] = [nums[right], nums[left]];
                    return nums[k];
                }

                const j = partition(left, right);
                if (j >= k) right = j - 1;
                if (j <= k) left = j + 1;
            }
        }

        return quickSelect(k - 1);
    }
}
