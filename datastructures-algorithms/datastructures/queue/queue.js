/*
 * @Author: 朽木白
 * @Date: 2022-03-26 21:39:55
 * @LastEditors: 1547702880@qq.com
 * @LastEditTime: 2022-06-01 18:49:44
 * @Description:
 */
class Queue {
  constructor() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }
  /**
   * @description: 向队列添加元素
   * @param {*} element
   * @return {*}
   */
  enqueue(element) {
    this.items[this.count] = element;
    this.count++;
  }
  /**
   * @description: 从队列移除元素
   * @return {*}
   */
  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }
    const result = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;
    return result;
  }
  /**
   * @description: 查看队列头元素
   * @return {*}
   */
  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.lowestCount];
  }

  /**
   * @description: 获取栈的长度
   * @return {*}
   */
  size() {
    return this.count - this.lowestCount;
  }

  /**
   * @description: 检查队列是否为空
   * @return {*}
   */
  isEmpty() {
    return this.count - this.lowestCount === 0;
  }

  /**
   * @description: 清空队列
   * @return {*}
   */
  clear() {
    this.items = {};

    this.count = 0;
    this.lowestCount = 0;
  }

  /**
   * @description: toString方法
   * @return {*}
   */
  toString() {
    if (this.isEmpty()) {
      return '';
    }
    let objString = `${this.items[this.lowestCount]}`;
    for (let i = this.lowestCount + 1; i < this.count; i++) {
      objString = `${objString},${this.items[i]}`;
    }
    return objString;
  }
}

const queue = new Queue();

console.log('验证队列是否为空:', queue.isEmpty());
// 入队
queue.enqueue('janney');
queue.enqueue('xiumu');
queue.enqueue('jianli');
console.log('查看队列中的值：', queue.toString());
console.log('获取队列头部值：', queue.peek());
console.log('查看队列大小：', queue.size());
// 出队
queue.dequeue();
console.log('出队以后查看队列中的值：', queue.toString());
// 清空队列
queue.clear();
console.log('清空队列以后查看队列中的值：', queue.toString());
