// for循环实现每一秒输出数组中的一个数字
// for (var i = 0; i < 6; i++) {
//   (function (i) {
//     setTimeout(() => {
//       console.log(i);
//     }, 1000 * i);
//   })(i);
// }
function createCounter() {
  let counter = 0;
  const myFunction = function () {
    counter = counter + 1;
    return counter;
  };
  return myFunction;
}
const increment = createCounter();
const c1 = increment();
const c2 = increment();
const c3 = increment();

console.log(c1, c2, c3);

// 它是这样工作的，无论何时声明新函数并将其赋值给变量，都要存储函数定义和闭包。
// 闭包包含在函数创建时作用域中的所有变量，它类似于背包。函数定义附带一个小背包，它的包中存储了函数定义创建时作用域中的所有变量。

// 销毁-只要函数结束，函数里面的就会被销毁了，包括闭包

// https://juejin.cn/post/6844903858636849159
