class MinStack {
    private min: number = Infinity;
    private stack: number[] = [];

    constructor() {}

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
        if (this.stack.length === 0) {
            this.stack.push(0);
            this.min = val;
        } else {
            this.stack.push(val - this.min);
            if (val < this.min) this.min = val;
        }
    }

    /**
     * @return {void}
     */
    pop(): void {
        if (this.stack.length === 0) return;
        const pop = this.stack.pop();

        if (pop < 0) this.min -= pop;
    }

    /**
     * @return {number}
     */
    top(): number {
        const top = this.stack[this.stack.length -1];
        return top > 0 ? top + this.min : this.min;
    }

    /**
     * @return {number}
     */
    getMin(): number {
        return this.min;
    }
}
