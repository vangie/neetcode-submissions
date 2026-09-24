class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        if(strs.length == 0) return '';
        let parts = []
        for(let s of strs) {
            parts.push(s.length + "#" + s);
        }
        return parts.join('');
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        let res : string[] = [];
        let i = 0;
        while(i < str.length){
            let j = i;
            while(str[j] != "#" ){
                j++;
            }

            let len = parseInt(str.slice(i, j));
            let begin = j + 1;
            let end = begin + len;
            res.push(str.slice(begin, end));
            i = end;
        }

        return res;
    }
}
