class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if(s.length!=t.length)return false;
        const countSet = new Map<string, number>(); 
        for(const char of s){
            if(countSet.has(char)) {
                countSet.set(char, countSet.get(char) + 1);
            } else {
                countSet.set(char, 1);
            }
        }
        for(const char of t){
            if(countSet.has(char)){
                var count = countSet.get(char);
                if(count == 0){
                    return false;
                }else {
                    countSet.set(char, count-1);
                }
            } else {
                return false;
            }
        }
        return true;
    }
}
