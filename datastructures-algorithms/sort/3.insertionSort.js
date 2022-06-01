/*
 * @Author: xiumubai 1547702880@qq.com
 * @Date: 2022-05-28 21:51:31
 * @LastEditors: xiumubai 1547702880@qq.com
 * @LastEditTime: 2022-05-28 22:02:37
 * @FilePath: /docs-code/javascript/数据结构与算法/排序/3.insertionSort.js
 * @Description: 插入排序
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

function insertionSort(array, compareFn = defaultCompare) {
  const { length } = array;
  let temp;
  for (let i = 1; i < length; i++) {
    let j = i;
    temp = array[i];
    while (j > 0 && compareFn(array[j - 1], temp) === Compare.BIGGER_THAN) {
      array[j] = array[j - 1];
      j--;
    }
    array[j] = temp;
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

const arr = createArray(5);
console.log('未排序的数组', arr);
const sortArr = insertionSort(arr);
console.log('排序后的数组', sortArr);

// 复杂度为O(n^2)
