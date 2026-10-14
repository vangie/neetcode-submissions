class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     */
    partition(s: string): string[][] {
        const res: string[][] = [];

        const dfs = (cur: string[], start: number, end: number) => {
            if (end > s.length) {
                return;
            }

            const curStr = s.substring(start, end);
            const isCurStrPalindrome = this.isPalindrome(curStr);

            if (end === s.length) {
                if (isCurStrPalindrome) {
                    res.push([...cur, curStr]);
                }
                return;
            } else {
                if (isCurStrPalindrome) {
                    cur.push(curStr);
                    dfs(cur, end, end + 1);
                    cur.pop();
                }

                dfs(cur, start, end + 1);
            }
        };

        dfs([], 0, 1);

        return res;
    }

    isPalindrome(s: string): boolean {
        let l = 0,
            r = s.length - 1;
        while (l < r) {
            if (s[l++] !== s[r--]) {
                return false;
            }
        }
        return true;
    }
}
