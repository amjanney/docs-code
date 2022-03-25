/**
 * 泛型
 */

interface CreateArrayFunc<T> {
  (len: number, value: T): Array<T>;
}

let createArray: CreateArrayFunc<any>;

createArray = function<T>(len: number, value: T): Array<T> {
  let result: T[] = [];
  for(let i = 0; i < len; i++) {
    result[i] = value;
  }
  return result;
}

console.log(createArray(3, 'xx'));

