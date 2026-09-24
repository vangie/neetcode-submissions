class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        let i=0,j=s.length-1;

        while(i<j){
            while(!this.isAlphaNum(s[i]) && i<j) i++;
            while(!this.isAlphaNum(s[j]) && i<j) j--;

            if(s.charCodeAt(i) != s.charCodeAt(j) && 
                s[i].toLowerCase() !== s[j].toLowerCase()){
                    return false;
                }
            
            i++;
            j--;

        }
        return true;
    }

    isAlphaNum(ch: string): boolean {
        return /^[A-Za-z0-9]$/.test(ch);
    }
}
