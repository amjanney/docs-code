// 规定在一个单位时间内，只能触发一次函数。如果这个单位时间内触发多次函数，只有一次生效。
// https://juejin.cn/post/6844903669389885453
function throttle(fn, wait) {
  let curTime = Date.now();
  return function () {
    let context = this;
    let args = arguments;
    let nowTime = Date.now();
    console.log(nowTime - curTime);
    if (nowTime - curTime >= wait) {
      curTime = Date.now();
      fn.apply(context, args);
    }
  };
}
