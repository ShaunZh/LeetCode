
var MyQueue = function () {
    this.stdIn = [];
    this.stdOut = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
    this.stdIn.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
    const size = this.stdOut.length;
    if (size) {
        return this.stdOut.pop();
    }
    while (this.stdIn.length) {
        this.stdOut.push(this.stdIn.pop())
    }
    return this.stdOut.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
    const x = this.pop();
    this.stdOut.push(x);
    return x;
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
    return !this.stdIn.length && !this.stdOut.length;
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */