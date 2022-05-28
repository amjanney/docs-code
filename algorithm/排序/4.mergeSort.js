/*
 * @Author: xiumubai 1547702880@qq.com
 * @Date: 2022-05-28 22:22:05
 * @LastEditors: xiumubai 1547702880@qq.com
 * @LastEditTime: 2022-05-28 23:39:43
 * @FilePath: /docs-code/javascript/数据结构与算法/排序/4.mergeSort.js
 * @Description: 归并排序
 */

const Compare = {
  /** 小于 */
  LESS_THAN: -1,
  /** 大于 */
  BIGGER_THAN: 1,
  /** 等于 */
  EQUALS: 0,
};

/**
 * 比较两个值的大小
 * @param {number} a
 * @param {number} b
 * @returns {number} -1 1 0
 */
function defaultCompare(a, b) {
  if (a === b) {
    return Compare.EQUALS;
  }
  return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
}

function mergeSort(array, compareFn = defaultCompare) {
  if (array.length > 1) {
    const { length } = array;
    const middle = Math.floor(length / 2);
    const left = mergeSort(array.slice(0, middle), compareFn);
    const right = mergeSort(array.slice(middle, length), compareFn);
    array = merge(left, right, compareFn);
  }
  return array;
}

function merge(left, right, compareFn) {
  let i = 0;
  let j = 0;
  const result = [];
  while (i < left.length && j < right.length) {
    result.push(
      compareFn(left[i], right[j]) === Compare.LESS_THAN
        ? left[i++]
        : right[j++]
    );
  }
  return result.concat(i < left.length ? left.slice(i) : right.slice(j));
}

function createArray(size) {
  const array = [];
  for (let i = size; i > 0; i--) {
    array.push(i);
  }
  return array;
}

const arr = createArray(5);
console.log('未排序的数组', arr);
const sortArr = mergeSort(arr);
console.log('排序后的数组', sortArr);

// 复杂度为O(nlog(n))
