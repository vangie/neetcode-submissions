class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countSubstrings(s: string): number {
        let res = 0;
        const n = s.length;

        for (let i = 0; i < n; i++) {
            let l = i,
                r = i;
            while (l >= 0 && r < n && s[l] === s[r]) {
                l--;
                r++;
                res++;
            }
            l = i;
            r = i + 1;
            while (l >= 0 && r < n && s[l] === s[r]) {
                l--;
                r++;
                res++;
            }
        }

        return res;
    }
}
