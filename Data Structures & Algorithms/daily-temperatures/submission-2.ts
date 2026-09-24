class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures: number[]): number[] {
        const stack: [number, number][] = [];
        const n = temperatures.length;
        const res = [];

        for (let i = 0; i < n; i++) {
            if (stack.length === 0) {
                stack.push([temperatures[i], i]);
            }

            while (stack.length > 0 && temperatures[i] > stack[stack.length - 1][0]) {
                const [_,idx] = stack.pop();
                res[idx] = i-idx;
            }

            stack.push([temperatures[i], i]);
        }

        while(stack.length > 0){
            const[_,idx] = stack.pop();
            res[idx] = 0;
        }

        return res;
    }
}
