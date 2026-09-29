class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1: number[], nums2: number[]): number {
        const m = nums1.length,
            n = nums2.length;
        let i = 0,
            j = 0,
            m1 = 0,
            m2 = 0;

        for (let c = 0; c < Math.floor((m + n) / 2) + 1; c++) {
            m2 = m1;
            if (i < m && j < n) {
                if (nums1[i] > nums2[j]) {
                    m1 = nums2[j];
                    j++;
                } else {
                    m1 = nums1[i];
                    i++;
                }
            } else if (i < m) {
                m1 = nums1[i];
                i++;
            } else {
                m1 = nums2[j];
                j++;
            }
        }
        if ((m + n) % 2 === 1) {
            return m1;
        } else {
            return (m1 + m2) / 2.0;
        }
    }
}
