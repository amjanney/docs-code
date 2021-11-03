Object.prototype.say = 'hi';

var person = { name: 'ja' };

for (var key in person) {
  console.log(`${key}: ${person[key]}`);
}

// for...in是专门迭代对象的，不推荐数组
// 它可以遍历对象上所有的属性，包括继承来的

console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));

for (const [key, value] of Object.entries(person)) {
  console.log(`${key}: ${value}`);
}

// for...of与for...in的区别

// for...in 语句以任意顺序迭代对象的可枚举属性。
// for...of 语句遍历可迭代对象定义要迭代的数据
