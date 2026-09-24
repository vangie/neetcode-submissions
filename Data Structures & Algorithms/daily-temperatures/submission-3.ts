class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures: number[]): number[] {
        const stack: [number, number][] = [];
        const n = temperatures.length;
        const res: number[] = new Array(n).fill(0);

        for (let i = 0; i < n; i++) {
            const t = temperatures[i];
            while (stack.length > 0 && t > stack[stack.length - 1][0]) {
                const [_,idx] = stack.pop();
                res[idx] = i-idx;
            }

            stack.push([t, i]);
        }

        return res;
    }
}
