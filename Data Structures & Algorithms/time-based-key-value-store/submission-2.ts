class TimeMap {
    private keyStore: Map<string, [string, number][]>;
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key: string, value: string, timestamp: number): void {
        if (!this.keyStore.has(key)) {
            this.keyStore.set(key, [[value, timestamp]]);
        } else {
            let val = this.keyStore.get(key);
            val.push([value, timestamp]);
        }
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key: string, timestamp: number): string {
        if (!this.keyStore.has(key)) {
            return "";
        }

        let val = this.keyStore.get(key);
        let l = 0,
            r = val.length;

        while (l < r) {
            let m = l + ((r - l) >> 1);
            if (val[m][1] > timestamp) {
                r = m;
            } else {
                l = m + 1;
            }
        }
        if (l === 0) return "";
        return val[l-1][0];
    }
}
