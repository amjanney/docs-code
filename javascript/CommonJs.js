// CommonJs和Es Module及它们的区别
// https://juejin.cn/post/6938581764432461854

/**
 * ## 解决的问题

- 解决变量污染问题，每个文件都是独立的作用域，所以不存在变量污染
- 解决代码维护问题，一个文件里代码非常清晰
- 解决文件依赖问题，一个文件里可以清楚的看到依赖了那些其它文件
 */

// 导出一个对象
module.exports = {
  name: 'janney',
  age: 18,
};

const data = require('./index.js');

const { name, age } = data;

// 导出任意变量
module.exports.name = 'janney';

// 直接导出

exports.name = 'janney';

exports = {
  name: 'janney',
};

// 混合导出

exports.name = 'janney';

module.exports = {
  name: 'janney',
};

// commonJs是值拷贝，可以修改变量的值

// index.js
let num = 0;
module.exports = {
  num,
  add() {
    ++num;
  },
};

let { num, add } = require('./index.js');
console.log(num); // 0
add();
console.log(num); // 0
num = 10;
console.log(num); // 10

// Es Module 基本语法

// 导出
export const name = 'janney';
export function fn() {}
export const testFn = () => {};

const name = 'janney';
const age = 18;

export { name, age };

// 混合导出
export const name = '蛙人';
export const age = 24;

export default {
  fn() {},
  msg: 'hello 蛙人',
};

// 导入

// index,js
export const name = '蛙人';
export const age = 24;

import { name, age } from './index.js';
console.log(name, age); // "蛙人" 24

// 如果里面全是单个导出，我们就想全部直接导入则可以这样写
import * as all from './index.js';
console.log(all); // {name: "蛙人", age: 24}


// 混合导入
// index,js
export const name = "蛙人"
export const age = 24
export default {
    msg: "蛙人"
}

import msg, { name, age } from './index.js'
console.log(msg) // { msg: "蛙人" }

// 修改默认名称 
// index,js
export const name = "蛙人"
export const age = 24
export default {
    msg: "蛙人"
}

import { default as all,  name, age } from './index.js'
console.log(all) // { msg: "蛙人" }

// 导入值的变化
// export导出的值是值的引用，并且内部有映射关系，这是export关键字的作用。而且导入的值，不能进行修改也就是只读状态。

// index.js
export let num = 0;
export function add() {
    ++ num
}

import { num, add } from "./index.js"
console.log(num) // 0
add()
console.log(num) // 1
num = 10 // 抛出错误

// 就是Es Module语句``import只能声明在该文件的最顶部，不能动态加载语句，Es Module`语句运行在代码编译时。

if (true) {
	import xxx from 'XXX' // 报错
}

//CommonJs和Es Module的区别

// CommonJs可以动态加载语句，代码发生在运行时

// CommonJs混合导出，还是一种语法，只不过不用声明前面对象而已，当我导出引用对象时之前的导出就被覆盖了

// CommonJs导出值是拷贝，可以修改导出的值，这在代码出错时，不好排查引起变量污染

// Es Module是静态的，不可以动态加载语句，只能声明在该文件的最顶部，代码发生在编译时

// Es Module混合导出，单个导出，默认导出，完全互不影响

// Es Module导出是引用值之前都存在映射关系，并且值都是可读的，不能修改