/*
 * @Author: xiumubai 1547702880@qq.com
 * @Date: 2022-05-29 19:43:35
 * @LastEditors: xiumubai 1547702880@qq.com
 * @LastEditTime: 2022-05-30 23:46:31
 * @FilePath: /docs-code/algorithm/排序/recursion.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
function countDown(num) {
  console.log(num);

  const newNum = num - 1;
  if (newNum > 0) {
    countDown(newNum);
  }
}
countDown(4);

// 阶乘
function factorial(n) {
  if (n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

const result = factorial(5);
console.log(result);

function recursion(num) {
  if (num === 0) return;
  console.log(num);
  recursion(num - 1);
}
recursion(4);
