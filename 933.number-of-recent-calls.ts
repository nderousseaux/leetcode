/*
 * @lc app=leetcode id=933 lang=typescript
 *
 * [933] Number of Recent Calls
 */

// @lc code=start
class RecentCounter {
    private calls: number[];

    constructor() {
        this.calls = [];
    }

    ping(t: number): number {
        this.calls.push(t);
        
        // Remove calls older than t - 3000
        while (this.calls.length > 0 && this.calls[0] < t - 3000) {
            this.calls.shift();
        }
        
        return this.calls.length;
    }
}

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
// @lc code=end

