/**
 * @param {number} capacity
 */
var LFUCache = function(capacity) {
    this.cap = capacity
    this.cache = new Map()
    this.counter = new Map()
    this.items = [new Set()]
};

/** 
 * @param {number} key
 * @return {number}
 */
LFUCache.prototype.get = function(key) {
    if(!this.cache.has(key)) return -1
    
    this.addCount(key)
    
    return this.cache.get(key)
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LFUCache.prototype.put = function(key, value) {
    if(this.cap){
        if(this.cache.size < this.cap || this.cache.has(key)){
            this.cache.set(key, value)
        } else {
            let min = 1
            while(!this.items[min-1].size) min++
            let evicted = this.items[min-1].values().next().value
            this.cache.delete(evicted)
            this.items[min-1].delete(evicted)
            this.counter.delete(evicted)
            this.cache.set(key, value)
        }
    
        this.addCount(key)
    }
};

// newly created function
LFUCache.prototype.addCount = function(key){
    
    this.counter.has(key) ? this.counter.set(key, this.counter.get(key) + 1) : this.counter.set(key, 1)

    let count = this.counter.get(key)

    if(count > 1){
        this.items[count - 2].delete(key)
        this.items[count - 1] ? this.items[count - 1].add(key) : this.items[count - 1] = new Set([key])
    } else {
        this.items[0].add(key)
    }
}

/** 
 * Your LFUCache object will be instantiated and called as such:
 * var obj = new LFUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */