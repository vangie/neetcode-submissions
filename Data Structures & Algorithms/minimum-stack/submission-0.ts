class MinStack {
    private arr: number[] = [];
    private leftMin: number[] = [];

    constructor() {}

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
        this.arr.push(val);
        if(this.leftMin.length === 0){
            this.leftMin[0] = val;
        } else {
            this.leftMin[this.arr.length -1] = Math.min(this.leftMin[this.arr.length-2], val);
        }
    }

    /**
     * @return {void}
     */
    pop(): void {
        this.arr.pop();
        this.leftMin.pop();
    }

    /**
     * @return {number}
     */
    top(): number {
        return this.arr[this.arr.length - 1];
    }

    /**
     * @return {number}
     */
    getMin(): number {
        return this.leftMin[this.arr.length -1];
    }
}
