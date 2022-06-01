/*
 * @Author: xiumubai 1547702880@qq.com
 * @Date: 2022-05-28 17:22:28
 * @LastEditors: xiumubai 1547702880@qq.com
 * @LastEditTime: 2022-05-28 18:36:42
 * @FilePath: /docs-code/javascript/数据结构与算法/排序/1.bubbleSort.js
 * @Description: 冒泡排序
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

function bubbleSort(array, compareFn = defaultCompare) {
  const { length } = array;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - 1 - i; j++) {
      // 前一项比后面一项大，交换数组
      if (compareFn(array[j], array[j + 1]) === Compare.BIGGER_THAN) {
        swap(array, j, j + 1);
      }
    }
  }
  return array;
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

function createArray(size) {
  const array = [];
  for (let i = size; i > 0; i--) {
    array.push(i);
  }
  return array;
}

const arr = createArray(10);
console.log('未排序的数组', arr);
const sortArr = bubbleSort(arr);
console.log('排序后的数组', sortArr);

// 复杂度O(n^2）
