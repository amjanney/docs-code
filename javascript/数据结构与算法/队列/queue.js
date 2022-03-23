class Queue {
  constructor() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }

  enqueue(element) {
    this.items[this.count] = element;
    this.count ++;
  }

  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }
    const result = this.items[this.lowestCount]
    delete this.items[this.lowestCount];
    this.lowestCount ++;
    return result;
  }

  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.lowestCount];
  }

  size() {
    return this.count - this.lowestCount;
  }

  isEmpty() {
    return this.count - this.lowestCount === 0;
  }

  clear() {
    this.items = {};

    this.count = 0;
    this.lowestCount = 0;
  }

  toString() {
    if (this.isEmpty()) {
      return ''
    }
    let objString = `${this.items[this.lowestCount]}`
    for(let i = this.lowestCount + 1; i < this.count; i++) {
      objString = `${objString},${this.items[i]}`
    }
    return objString;
  }
}

const queue = new Queue()

console.log('验证队列是否为空:', queue.isEmpty());
// 入队
queue.enqueue('janney')
queue.enqueue('xiumu')
queue.enqueue('jianli')
console.log('查看队列中的值：', queue.toString());
console.log('获取队列头部值：', queue.peek());
console.log('查看队列大小：', queue.size());
// 出队
queue.dequeue()
console.log('出队以后查看队列中的值：', queue.toString());
// 清空队列
queue.clear();
console.log('清空队列以后查看队列中的值：', queue.toString());

