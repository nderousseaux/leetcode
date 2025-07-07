/*
 * @lc app=leetcode id=705 lang=typescript
 *
 * [705] Design HashSet
 */

// @lc code=start
class MyHashSet {
    list: number[];
    constructor() {
       this.list = [] 
    }

    add(key: number): void {
        if (!this.list.includes(key))
            this.list.push(key);
        
    }

    remove(key: number): void {
        delete this.list[this.list.findIndex(i => i == key)];
    }

    contains(key: number): boolean {
        return this.list.findIndex(i => i == key) != -1; 
        
    }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
// @lc code=end

