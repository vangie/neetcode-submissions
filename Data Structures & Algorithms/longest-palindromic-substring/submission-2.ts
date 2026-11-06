class Solution {
    mancher(s: string): number[] {
        const t = "#" + s.split("").join("#") + "#";
        const n = t.length;
        const p = new Array(n).fill(0);
        let l = 0,
            r = 0;

        for (let i = 0; i < n; i++) {
            p[i] = i < r ? Math.min(r - i, p[l + r - i]) : 0;
            while (i + p[i] + 1 < n && i - p[i] - 1 >= 0 && t[i + p[i] + 1] === t[i - p[i] - 1]) {
                p[i]++;
            }
            if (i + p[i] > r) {
                l = i - p[i];
                r = i + p[i];
            }
        }

        return p;
    }

    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s: string): string {
        const p = this.mancher(s);
        let resLen = 0,
            center_idx = 0;
        for (let i = 0; i < p.length; i++) {
            if (p[i] > resLen) {
                resLen = p[i];
                center_idx = i;
            }
        }

        const resIdx = (center_idx - resLen) / 2;
        return s.substring(resIdx, resIdx + resLen);
    }
}
