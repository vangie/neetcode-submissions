class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1: number[], nums2: number[]): number {
        if (nums1.length > nums2.length) {
            [nums1, nums2] = [nums2, nums1];
        }
        const m = nums1.length;
        const n = nums2.length;
        let l = 0;
        let r = m;

        while (l <= r) {
            let i = l + ((r - l) >> 1);
            let j = ((m + n + 1) >> 1) - i;

            const aLeft = i === 0 ? -Infinity : nums1[i - 1];
            const aRight = i === m ? Infinity : nums1[i];
            const bLeft = j === 0 ? -Infinity : nums2[j - 1];
            const bRight = j === n ? Infinity : nums2[j];

            if (aLeft <= bRight && bLeft <= aRight) {
                const leftMax = Math.max(aLeft, bLeft);
                const rightMin = Math.min(aRight, bRight);
                if ((m + n) % 2 === 0) {
                    return (leftMax + rightMin) / 2;
                }
                return leftMax;
            } else if (aLeft > bRight) {
                r = i - 1;
            } else {
                l = i + 1;
            }
        }
        throw new Error("invalid input");
    }
}
