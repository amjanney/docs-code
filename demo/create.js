function create(obj) {
  function fn();
  fn.prototype = obj;
  return fn;
}