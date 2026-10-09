class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones: number[]): number {
        let maxStone = 0;
        for (let stone of stones) {
            maxStone = Math.max(maxStone, stone);
        }

        let bucket = Array(maxStone + 1).fill(0);

        for (let stone of stones) {
            bucket[stone]++;
        }

        let first = maxStone,
            second = maxStone;
        while (first > 0) {
            if (bucket[first] % 2 === 0) {
                first--;
                continue;
            }

            let j = Math.min(first - 1, second);
            while (j > 0 && bucket[j] === 0) {
                j--;
            }
            if (j === 0) {
                return first;
            }

            second = j;
            bucket[first]--;
            bucket[second]--;
            bucket[first - second]++;
            first = Math.max(first - second, second);
        }

        return first;
    }
}
