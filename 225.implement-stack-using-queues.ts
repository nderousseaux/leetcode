/*
 * @lc app=leetcode id=225 lang=typescript
 *
 * [225] Implement Stack using Queues
 */

// @lc code=start

class MyQueue {
    queue;
    constructor() {
        this.queue = []
    }
    push(n: number) {
        this.queue.push(n)
    }
    peek(): (number | null) {
        return this.queue[0]
    }
    pop() {
        let r = this.peek();
        this.queue.shift()
        return r;
    }
    size() {
        return this.queue.length
    }
    isEmpth() {
        return this.queue.length == 0
    }
}


class MyStack {
    public queue: MyQueue;
    constructor() {
        this.queue = new MyQueue();
    }

    push(x: number): void {
        this.queue.push(x);
        let size = this.queue.size();
        while (size > 1) {
            this.queue.push(this.queue.pop());
            size--;
        }
    }

    pop(): number {
        return this.queue.pop();
    }

    top(): number {
        return this.queue.peek();
    }

    empty(): boolean {
        return this.queue.isEmpth();
    }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
// @lc code=end

