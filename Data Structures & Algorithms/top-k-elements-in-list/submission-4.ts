class MinPriorityQ<T> {
    private heap:T[] = [];
    private compare: (a: T, b: T) => number;

    constructor(compare: (a: T, b: T) => number){
        this.compare = compare;
    }

    size(): number {
        return this.heap.length;
    }

    isEmpty(): boolean {
        return this.heap.length == 0;
    }

    peek(): T | undefined {
        return this.heap[0];
    }

    offer(value: T): void {
        this.heap.push(value);
        this.siftUp(this.heap.length - 1);
    }

    poll(): T|undefined {
        if(this.heap.length === 0){
            return undefined;
        }

        if(this.heap.length === 1) {
            return this.heap.pop();
        }

        const result = this.heap[0];

        this.heap[0] = this.heap.pop()!;

        this.siftDown(0);

        return result;
    }

    private siftUp(index: number): void {
        while(index > 0){
            const parent = Math.floor((index-1)/2);
            if(this.compare(this.heap[index], this.heap[parent]) >=0 ){
                break;
            }

            this.swap(index, parent);
            index = parent;
        }
    }

    private siftDown(index: number): void {
        const n = this.heap.length;

        while(true) {
            const left = index * 2 + 1;
            const right = index * 2 + 2;
            let smallest = index;

            if( left < n && this.compare(this.heap[left], this.heap[smallest]) < 0){
                smallest = left;
            }
            if( right < n && this.compare(this.heap[right], this.heap[smallest]) < 0){
                smallest = right;
            }
            if(smallest == index){
                break;
            }
            this.swap(index, smallest);
            index = smallest;
        }
    }

    private swap(i: number, j: number):void {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }
}

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const count: Record<number, number> = {};
        for(const num of nums){
            count[num] = (count[num] || 0) + 1;
        }

        const heap = new MinPriorityQ<[number, number]>((a, b)=> a[1] - b[1]);
        for(const [num, cnt] of Object.entries(count)){
            heap.offer([parseInt(num), cnt]);
            if(heap.size()>k){
                heap.poll();
            }
        }

        const res = [];
        for(let i=0;i<k;i++){
            const [num, cnt] = heap.poll();
            res.push(num);
        }
        return res;
    }
}


