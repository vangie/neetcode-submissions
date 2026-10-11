class Solution {
    /**
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
    leastInterval(tasks: string[], n: number): number {
        const count = new Array(26).fill(0);
        for (const task of tasks) {
            count[task.charCodeAt(0) - "A".charCodeAt(0)]++;
        }

        const maxf = Math.max(...count);
        let maxCount = 0;
        for (const i of count) {
            if (i === maxf) {
                maxCount++;
            }
        }

        const time = (maxf - 1) * (n + 1) + maxCount;
        return Math.max(tasks.length, time);
    }
}
