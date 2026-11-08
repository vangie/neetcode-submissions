class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums: number[]): number {
        let segs = [],
            cur = [],
            res = -Infinity;

        nums.forEach((num) => {
            res = Math.max(res, num);
            if (num === 0) {
                if (cur.length) segs.push(cur);
                cur = [];
            } else {
                cur.push(num);
            }
        });
        if (cur.length) segs.push(cur);

        segs.forEach((seg) => {
            let negs = 0;
            seg.forEach((i: number) => {
                if (i < 0) negs++;
            });
            let prod = 1;
            let need = negs % 2 === 0 ? negs : negs - 1;
            negs = 0;
            for (let l = 0, r = 0; r < seg.length; r++) {
                prod *= seg[r];
                if (seg[r] < 0) {
                    negs++;
                    while (negs > need) {
                        prod /= seg[l];
                        if (seg[l] < 0) negs--;
                        l++;
                    }
                }

                if (l <= r) res = Math.max(res, prod);
            }
        });

        return res;
    }
}
