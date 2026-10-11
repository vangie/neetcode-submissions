class Solution {
    /**
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
    leastInterval(tasks: string[], n: number): number {
        const count: number[] = new Array(26).fill(0);
        for (const task of tasks) {
            count[task.charCodeAt(0) - "A".charCodeAt(0)]++;
        }

        count.sort((a, b) => a - b);
        const maxf = count[25];
        let idle = (maxf - 1) * n;
        for (let i = 24; i >= 0; i--) {
            idle -= Math.min(maxf - 1, count[i]);
        }
        return Math.max(0, idle) + tasks.length;
    }
}
