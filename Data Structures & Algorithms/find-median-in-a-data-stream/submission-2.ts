class MedianFinder {
    private large: typeof MinPriorityQueue;
    private small: typeof MaxPriorityQueue;

    constructor() {
        this.large = new MinPriorityQueue();
        this.small = new MaxPriorityQueue();
    }

    /**
     *
     * @param {number} num
     * @return {void}
     */
    addNum(num: number): void {
        this.small.enqueue(num);
        this.large.enqueue(this.small.dequeue());

        if (this.large.size() > this.small.size()) {
            this.small.enqueue(this.large.dequeue());
        }
    }

    /**
     * @return {number}
     */
    findMedian(): number {
        if (this.small.size() > this.large.size()) {
            return this.small.front();
        } else {
            return (this.small.front() + this.large.front()) / 2;
        }
    }
}
