class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @param {string} s3
     * @return {boolean}
     */
    isInterleave(s1: string, s2: string, s3: string): boolean {
        const memo = {};
        const n1 = s1.length,
            n2 = s2.length,
            n3 = s3.length;
        if (n1 + n2 !== n3) return false;
        const dfs = (i1: number, i2: number): boolean => {
            const i3 = i1 + i2;
            if (i1 === n1 && i2 === n2) return true;
            if (s1[i1] !== s3[i3] && s2[i2] !== s3[i3]) return false;
            const key = `${i1}-${i2}`;

            if (key in memo) return memo[key];

            let res = false;
            if (i1 < n1 && s1[i1] === s3[i3]) {
                res ||= dfs(i1 + 1, i2);
            }
            if (i2 < n2 && s2[i2] === s3[i3]) {
                res ||= dfs(i1, i2 + 1);
            }
            return (memo[key] = res);
        };

        return dfs(0, 0);
    }
}
