
var StockSpanner = function() {
    this.stack = [] // (pric: bumber, span: number)
};

/** 
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function(price) {
    // each individual is start of new span
    let span = 1

    // compare stack top < cur price & if so incr span
    while (this.stack.length && this.stack[this.stack.length - 1].price <= price) {
        let prev = this.stack.pop()
        span += prev.span
    }
    // push cur price onto stack
    this.stack.push({price: price, span: span})
    return span
};

/** 
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */