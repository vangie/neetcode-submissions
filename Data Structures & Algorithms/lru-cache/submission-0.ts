class N {
    public prev: N;
    public next: N;
    constructor(
        public key: number,
        public val: number,
    ) {}
}

class LRUCache {
    private cap: number;
    private cache: Map<number, N>;
    private left: N;
    private right: N;
    /**
     * @param {number} capacity
     */
    constructor(capacity: number) {
        this.cap = capacity;
        this.cache = new Map();
        this.left = new N(0, 0);
        this.right = new N(0, 0);
        this.left.next = this.right;
        this.right.prev = this.left;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key: number): number {
        if (this.cache.has(key)) {
            const node = this.cache.get(key);
            this.remove(node);
            this.insert(node);
            return node.val;
        }
        return -1;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key: number, value: number): void {
        if (this.cache.has(key)) {
            this.remove(this.cache.get(key));
        }
        const newNode = new N(key, value);
        this.cache.set(key, newNode);
        this.insert(newNode);

        if (this.cache.size > this.cap) {
            const lru = this.left.next;
            this.remove(lru);
            this.cache.delete(lru.key);
        }
    }

    private remove(node: N) {
        const prev = node.prev;
        const next = node.next;
        prev.next = next;
        next.prev = prev;
    }

    private insert(node: N) {
        const prev = this.right.prev;
        prev.next = node;
        node.prev = prev;
        node.next = this.right;
        this.right.prev = node;
    }
}
