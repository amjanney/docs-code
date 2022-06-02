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

/**
 * 栈问题的实际应用，进制转换
 */

/**

十进制转换为二进制

商/2 对商取整 结果为0 余数即为二进制

过程分析：

10 / 2 = 5 rem=0
5 / 2 = 2  rem=1
2 / 2 = 1  rem=0
1 / 2 = 0  rem=0

 */

function decimalToBinary(decNumber) {
  const remStack = new Stack();
  let number = decNumber;

  let rem;

  let binaryString = '';

  while (number > 0) {
    rem = Math.floor(number % 2);
    remStack.push(rem);
    number = Math.floor(number / 2);
  }

  while (!remStack.isEmpty()) {
    binaryString += remStack.pop().toString();
  }
  return binaryString;
}

console.info('-------------↓↓↓↓↓十进制转2进制测试↓↓↓↓↓-------------');

console.info('10转换为2进制为：', decimalToBinary(10)); // 1010

console.info('20转换为2进制为：', decimalToBinary(20)); // 10100

// const a = '0123456789ABCDE';
// console.log(a[2]);

function baseConverter(decNumber, base) {
  if (base < 2 || base > 36) {
    return '';
  }
  const remStack = new Stack();
  const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let number = decNumber;

  let rem;

  let binaryString = '';

  while (number > 0) {
    rem = Math.floor(number % base);
    remStack.push(rem);
    number = Math.floor(number / base);
  }

  while (!remStack.isEmpty()) {
    binaryString += digits[remStack.pop()];
  }

  return binaryString;
}

console.info('-------------↓↓↓↓↓十进制转2-36任意进制测试↓↓↓↓↓-------------');

console.info('100345转换为3进制为：', baseConverter(100345, 3)); // 12002122111
console.info('100345转换为8进制为：', baseConverter(100345, 8)); // 303771
console.info('100345转换为16进制为：', baseConverter(100345, 16)); // 187F9
console.info('100345转换为36进制为：', baseConverter(100345, 36)); // 25FD
