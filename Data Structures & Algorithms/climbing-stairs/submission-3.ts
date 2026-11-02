class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n: number): number {
        let one = 1,
            two = 1;
        for (let i = 0; i < n - 1; i++) {
            [one, two] = [one + two, one];
        }
        return one;
    }
}
