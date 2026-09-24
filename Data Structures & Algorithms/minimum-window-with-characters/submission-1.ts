class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s: string, t: string): string {
        if (t === "") return "";

        let cntT = {};
        let window = {};
        for (let c of t) {
            cntT[c] = (cntT[c] ?? 0) + 1;
        }

        let have = 0,
            need = Object.keys(cntT).length;
        let res = [-1, -1];
        let resLen = Infinity;
        let l = 0,
            r = 0;
        while (r < s.length) {
            let c = s[r];
            window[c] = (window[c] ?? 0) + 1;

            if (cntT[c] && window[c] === cntT[c]) {
                have++;
            }

            while (have === need) {
                if (r - l + 1 < resLen) {
                    resLen = r - l + 1;
                    res = [l, r];
                }

                window[s[l]]--;
                if (cntT[s[l]] && window[s[l]] < cntT[s[l]]) {
                    have--;
                }
                l++;
            }
            r++;
        }

        return resLen === Infinity ? "" : s.slice(res[0], res[1] + 1);
    }
}
