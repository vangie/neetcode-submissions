class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1: number[], nums2: number[]): number {
        const m = nums1.length,
            n = nums2.length;
        const l = Math.floor((m + n + 1) / 2),
            r = Math.floor((m + n + 2) / 2);

        return (this.getKth(nums1, m, nums2, n, l) + this.getKth(nums1, m, nums2, n, r)) / 2.0;
    }

    getKth(a: number[], m: number, b: number[], n: number, k: number, aStart = 0, bStart = 0) {
        if (m > n) {
            return this.getKth(b, n, a, m, k, bStart, aStart);
        }

        if (m === 0) {
            return b[bStart + k - 1];
        }

        if (k === 1) {
            return Math.min(a[aStart], b[bStart]);
        }

        const i = Math.min(m, k >> 1),
            j = Math.min(n, k >> 1);
        if (a[aStart + i - 1] > b[bStart + j - 1]) {
            return this.getKth(a, m, b, n - j, k - j, aStart, bStart + j);
        } else {
            return this.getKth(a, m - i, b, n, k - i, aStart + i, bStart);
        }
    }
}
