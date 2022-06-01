/*
 * @Author: xiumubai 1547702880@qq.com
 * @Date: 2022-05-28 18:39:48
 * @LastEditors: xiumubai 1547702880@qq.com
 * @LastEditTime: 2022-05-28 21:51:37
 * @FilePath: /docs-code/javascript/数据结构与算法/排序/2.selectionSort.js
 * @Description: 选择排序
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

/**
 * 交换数组的两个值
 * @param {Array} array
 * @param {number} a
 * @param {number} b
 */
function swap(array, a, b) {
  [array[a], array[b]] = [array[b], array[a]];
}

function selectionSort(array, compareFn = defaultCompare) {
  const { length } = array;
  let indexMin;
  for (let i = 0; i < length - 1; i++) {
    indexMin = i;
    for (let j = i; j < length; j++) {
      if (compareFn(array[indexMin], array[j]) === Compare.BIGGER_THAN) {
        indexMin = j;
      }
    }
    if (i !== indexMin) {
      swap(array, i, indexMin);
    }
  }
  return array;
}

function createArray(size) {
  const array = [];
  for (let i = size; i > 0; i--) {
    array.push(i);
  }
  return array;
}

const arr = createArray(10);
console.log('未排序的数组', arr);
const sortArr = selectionSort(arr);
console.log('排序后的数组', sortArr);

// 复杂度为O(n^2)
