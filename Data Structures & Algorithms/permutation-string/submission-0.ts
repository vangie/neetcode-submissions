class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1: string, s2: string): boolean {
        let cnt1: Record<string, number> = {};
        for (let c of s1) {
            cnt1[c] = (cnt1[c] ?? 0) + 1;
        }

        let need = Object.keys(cnt1).length;
        for (let i = 0; i < s2.length; i++) {
            let cnt2 = {};
            let win = 0;
            for (let j = i; j < s2.length; j++) {
                let c = s2[j];
                cnt2[c] = (cnt2[c] ?? 0) + 1;
                if ((cnt1[c] ?? 0) < cnt2[c]) {
                    break;
                } else if ((cnt1[c] ?? 0) === cnt2[c]) {
                    win++;
                }

                if (win === need) {
                    return true;
                }
            }
        }
        return false;
    }
}
