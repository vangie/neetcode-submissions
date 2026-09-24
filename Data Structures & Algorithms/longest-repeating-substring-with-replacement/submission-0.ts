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
            const c = s[r];
            const cnt = (mp.get(c) ?? 0) + 1;
            mp.set(c, cnt);
            maxFreq = Math.max(maxFreq, cnt);

            if (r - l + 1 - maxFreq > k) {
                const leftChar = s[l];
                const leftCnt = (mp.get(leftChar) ?? 0) - 1;
                if (leftCnt === 0) mp.delete(leftChar);
                else mp.set(leftChar, leftCnt);
                l++;
            }

            res = Math.max(res, r - l + 1);
        }

        return res;
    }
}
