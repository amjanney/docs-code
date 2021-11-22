// 数组解构赋值

import { useState } from "react";

let a, b, rest;
// [a, b] = [10, 20]
[a, b, ...rest] = [10, 20, 30, 40]

console.log(a, b, rest);

const [count, setCount] = useState(0)
// 与下面相同
var countVariable = useState(0); // 返回一个有两个元素的数组
var count = countVariable[0]; // 数组里的第一个值
var setCount = countVariable[1]; // 数组里的第二个值
