/*
 * @lc app=leetcode id=1656 lang=typescript
 *
 * [1656] Design an Ordered Stream
 */

// @lc code=start
class OrderedStream {
    private stream: (string | null)[];
    private ptr: number;

    constructor(n: number) {
        this.stream = new Array(n).fill(null);
        this.ptr = 0;
    }

    insert(idKey: number, value: string): string[] {
        this.stream[idKey - 1] = value;
        const result: string[] = [];
        
        while (this.ptr < this.stream.length && this.stream[this.ptr] !== null) {
            result.push(this.stream[this.ptr]!);
            this.ptr++;
        }
        
        return result;
    }
}

/**
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(idKey,value)
 */
// @lc code=end

