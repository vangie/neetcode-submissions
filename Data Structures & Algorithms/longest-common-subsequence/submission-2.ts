class Solution {
    /**
     * @param {string} text1
     * @param {string} text2
     * @return {number}
     */
    longestCommonSubsequence(text1: string, text2: string): number {
        let n1 = text1.length;
        let n2 = text2.length;

        if (n1 < n2) {
            [text1, text2] = [text2, text1];
            [n1, n2] = [n2, n1];
        }

        let prev = Array(n2 + 1).fill(0);
        let curr = Array(n2 + 1).fill(0);

        for(let i = n1-1;i>=0;i--){
            for(let j = n2-1;j>=0;j--){
                if(text1[i] == text2[j]){
                    curr[j] = 1 + prev[j+1];
                }else {
                    curr[j] = Math.max(curr[j+1], prev[j]);
                }
            }
            [prev, curr] = [curr, prev];
        }

        return prev[0];
    }
}
