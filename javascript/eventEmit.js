// vm._events = {event1: [cb1], event2: [cb2]}
function Vue() {
  this._events = {};
}

// 添加事件
/**
  vm.$on('event1', cb1);
  vm.$on('event1', cb2);
  vm._events={event1: [cb1, cb2]}
 */
Vue.prototype.$on = function (event, fn) {
  const vm = this;
  if (Array.isArray(event)) {
    for (let i = 0; i < event.length; i++) {
      vm.$on(event[i], fn);
    }
  } else {
    (vm._events[event] || (vm._events[event] = [])).push(fn);
  }
  return vm;
};

// $emit:触发事件

Vue.prototype.$emit = function (event) {
  const vm = this;
  const cbs = vm._events[event];
  if (cbs) {
    // const args = Array.prototype.slice.call(arguments);
    const args = Array.from(arguments);
    for (let i = 0; i < cbs.length; i++) {
      cbs[i].apply(vm, args);
    }
  }
  return vm;
};

// $off:移除事件
// vm.$off('event1', cb1);
// 这时cb1就被移除了，vm._events={event1: [cb2]}
Vue.prototype.$off = function (event, fn) {
  const vm = this;

  if (!arguments.length) {
    vm._events = Object.create({});
    return vm;
  }

  if (Array.isArray(event)) {
    for (let i = 0; i < event.length; i++) {
      vm.$off(event[i], fn);
    }
    return vm;
  }

  const cbs = vm._events[event];
  if (!cbs) {
    return vm;
  }

  if (!fn) {
    vm._events[event] = null;
    return null;
  }

  let cb;
  let i = cbs.length;
  while (i--) {
    cb = cbs[i];
    if (cb === fn || cb.fn === fn) {
      cbs.splice(i, 1);
      break;
    }
  }
  return vm;
};

// $once:触发一次事件,然后移除这个事件
//vm.$on('event2', cb4);
//vm.$once('event2', cb5);
Array.prototype.$once = function (event) {
  const vm = this;
  function on() {
    vm.$off(event, on);
    fn.appy(vm, arguments);
  }
  on.fn = fn;
  // 执行一次on事件，然后
  vm.$on(event, on);
  return vm;
};
