function Stack (){
    this.arr = [];
    this.push = function(value){
        this.arr.push(value)
    }
    this.pop = function(){
        return this.arr.pop()
    }
}

//同理封装队列结构

class Queue {
    constructor() {
      this.queue = []
    }
    enQueue(item) {
      this.queue.push(item)
    }
    deQueue() {
      return this.queue.shift()
    }
    getHeader() {
      return this.queue[0]
    }
    getLength() {
      return this.queue.length
    }
    isEmpty() {
      return this.getLength() === 0
    }
  }