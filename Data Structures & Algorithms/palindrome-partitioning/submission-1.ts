class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     */
    partition(s: string): string[][] {
        const res: string[][] = [];
        const dfs = (part: string[], i: number) => {
            if (i >= s.length) {
                res.push([...part]);
                return;
            }
            for (let j = i; j < s.length; j++) {
                if (this.isPali(s, i, j)) {
                    part.push(s.substring(i, j + 1));
                    dfs(part, j + 1);
                    part.pop();
                }
            }
        };
        dfs([], 0);
        return res;
    }

    isPali(s: string, l: number, r: number): boolean {
        while (l < r) {
            if (s[l++] !== s[r--]) {
                return false;
            }
        }
        return true;
    }
}
