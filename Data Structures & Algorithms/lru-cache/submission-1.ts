class LRUCache {
    private cache: Map<number, number> = new Map();

    /**
     * @param {number} capacity
     */
    constructor(private capacity: number) {}

    /**
     * @param {number} key
     * @return {number}
     */
    get(key: number): number {
        if (!this.cache.has(key)) return -1;
        const value = this.cache.get(key);
        this.cache.delete(key);
        this.cache.set(key, value);
        return value;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key: number, value: number): void {
        if (this.cache.has(key)) {
            this.cache.delete(key);
        } else if (this.cache.size === this.capacity) {
            const firstKey = this.cache.keys().next().value;
            this.cache.delete(firstKey);
        }
        this.cache.set(key, value);
    }
}
