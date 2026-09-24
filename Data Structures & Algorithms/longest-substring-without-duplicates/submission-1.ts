class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        if(s.length <=1){
            return s.length;
        }

        let res = 0, l = 0, r = 1, n=s.length;
        let set = new Set<string>();

        set.add(s[0]);
        while(r<n){
            if(set.has(s[r])){
                set.delete(s[l]);
                l++;
            } else {
                set.add(s[r]);
                res = Math.max(res, set.size);
                r++;
            }
        }
        return res;
    }
}
