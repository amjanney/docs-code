/*
 * @Author: 朽木白
 * @Date: 2022-03-26 21:39:55
 * @LastEditors: 1547702880@qq.com
 * @LastEditTime: 2022-06-01 18:25:56
 * @Description: 栈的操作
 */
/**
 * 栈的相关操作
 */
class Stack {
  constructor() {
    this._count = 0;
    this._items = {};
  }
  // 入栈
  push(element) {
    this._items[this._count] = element;
    this._count++;
  }
  // 大小
  size() {
    return this._count;
  }
  // 栈是否已为空
  isEmpty() {
    return this._count === 0;
  }
  // 出栈
  pop() {
    if (this.isEmpty()) {
      return undefined;
    }
    this._count--;
    const result = this._items[this._count];
    delete this._items[this._count];
    return result;
  }
  // 取栈顶元素
  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this._items[this._count - 1];
  }
  // 清空栈
  clear() {
    // 第一种方式，直接设置为空

    // this._count = 0;
    // this._items = {};

    // 第二种方式
    while (!this.isEmpty()) {
      this.pop();
    }
  }
  // 打印栈中的内容
  toString() {
    if (this.isEmpty()) {
      return '';
    }

    let objString = `${this._items[0]}`;

    for (let i = 1; i < this._count; i++) {
      objString = `${objString}, ${this._items[i]}`;
    }

    return objString;
  }
}

const stack = new Stack();

console.info('-------------↓↓↓↓栈方法测试↓↓↓↓↓-------------');
stack.push(8);
stack.push(9);
stack.push(10);
console.log('入栈中的数据', stack._items);
console.log('toString', stack.toString());

console.log('栈的大小', stack.size());
console.log('栈是否为空', stack.isEmpty());
stack.pop();
console.log('栈顶元素', stack.peek());
console.log('出栈中的数据', stack._items);
stack.clear();
console.log('清空栈中的数据', stack._items);
