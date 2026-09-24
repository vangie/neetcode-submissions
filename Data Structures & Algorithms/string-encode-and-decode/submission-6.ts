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
        let state: "length" | "content" = "length";
        let lenChars: string[] = [];
        let len: number;
        for(let i=0;i<str.length;i++){
            if(state == "length"){
                if(str.charAt(i) === '#') {
                    state = "content";
                    len = parseInt(lenChars.join(""));
                    lenChars = [];
                    if(len == 0){
                        res.push("");
                        state = "length"
                    }
                } else {
                    lenChars.push(str.charAt(i));
                }
            } else if(state == "content"){
                res.push(str.slice(i, i+len));
                i= i+ len - 1;
                state = "length";
            }
        }

        return res;
    }
}
