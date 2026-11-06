class Solution {
    manacher(s: string): number[] {
        const t = "#" + s.split("").join("#") + "#";
        const n = t.length;
        const p = new Array(n).fill(0);
        let l = 0,
            r = 0;
        for (let i = 0; i < n; i++) {
            p[i] = i < r ? Math.min(r - i, p[l + (r - i)]) : 0;
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
     * @return {number}
     */
    countSubstrings(s: string): number {
        const p = this.manacher(s);
        let res = 0;
        for (let i of p) {
            res += Math.floor((i + 1) / 2);
        }
        return res;
    }
}
