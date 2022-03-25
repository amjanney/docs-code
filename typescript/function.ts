/**
 * 函数的类型
 */

const sum: (x: number, y: number) => number = function(x: number, y: number): number {
  return x+y;
}

interface SearchFunc {
  (source: string, subStr: string): boolean;
}

let searchStr: SearchFunc;

searchStr = function (source: string, subStr: string) {
  return source.search(subStr) !== -1;
}
