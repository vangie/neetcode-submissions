class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s: string, k: number): number {
        const n = s.length;
        if (n === 0) return 0;
        if (k >= n) return n;

        let mp = new Map<string, number>();
        let l = 0,
            res = 0,
            maxFreq = 1;

        for (let r = 0; r < n; r++) {
            mp.set(s[r], (mp.get(s[r]) ?? 0) + 1);
            maxFreq = Math.max(maxFreq, mp.get(s[r]));

            if (r - l + 1 - maxFreq > k) {
                mp.set(s[l], mp.get(s[l]) - 1);
                l++;
            }

            res = Math.max(res, r - l + 1);
        }

        return res;
    }
}
