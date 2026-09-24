class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens: string[]): number {
        const stack: number[] = [];
        let l:number, r:number;
        for(let t of tokens){
            switch(t){
                case "+":
                    r = stack.pop();
                    l = stack.pop();
                    stack.push(l+r);
                    break;
                case "-":
                    r = stack.pop();
                    l = stack.pop();
                    stack.push(l-r);
                    break;
                case "*":
                    r = stack.pop();
                    l = stack.pop();
                    stack.push(l*r);
                    break;
                case "/":
                    r = stack.pop();
                    l = stack.pop();
                    stack.push(Math.trunc(l/r));
                    break;
                default:
                    stack.push(parseInt(t));
            }
        }
        return stack.pop();
    }
}
