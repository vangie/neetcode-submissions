class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target: number, position: number[], speed: number[]): number {
        let pairs = position.map((p, i) => [p, speed[i]]);
        pairs.sort((a, b) => b[0] - a[0]);

        let fleets = 1;
        let currTime = (target - pairs[0][0]) / pairs[0][1];
        for (let i = 1; i < pairs.length; i++) {
            let nextTime = (target - pairs[i][0]) / pairs[i][1];
            if (nextTime > currTime) {
                fleets++;
                currTime = nextTime;
            }
        }
        return fleets;
    }
}
