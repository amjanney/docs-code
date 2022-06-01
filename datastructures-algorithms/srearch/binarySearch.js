/*
 * @Author: xiumubai 1547702880@qq.com
 * @Date: 2022-05-28 16:51:36
 * @LastEditors: xiumubai 1547702880@qq.com
 * @LastEditTime: 2022-05-31 01:04:33
 * @FilePath: /docs-code/javascript/数据结构与算法/查找/binarySearch.js
 * @Description: 二分查找
 */

const DOES_NOT_EXIST = 'dose not exist!';
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
 * @description: 插入排序
 * @param {*} array
 * @param {*} compareFn
 * @return {*}
 */
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

/**
 * @description: 二分查找
 * @param {*} array
 * @param {*} value
 * @param {*} compareFn
 * @return {*}
 */
function binnarySearch(array, value, compareFn = defaultCompare) {
  const sortedArray = insertionSort(array);
  let low = 0;
  let high = sortedArray.length - 1;
  while (lesserOrEquals(low, high, compareFn)) {
    const mid = Math.floor(low + high);
    const ele = sortedArray[mid];
    if (compareFn(ele, value) === Compare.LESS_THAN) {
      low = mid + 1;
    } else if (compareFn(ele, value) === Compare.BIGGER_THAN) {
      high = mid - 1;
    } else {
      return mid;
    }
  }
  return DOES_NOT_EXIST;
}

function lesserOrEquals(a, b, compareFn) {
  const comp = compareFn(a, b);
  return comp === Compare.LESS_THAN || cpmp === Compare.EQUALS;
}

const arr = [5, 4, 5, 3, 6, 4, 2, 1];
console.log('未排序的数组', arr);
const num = binnarySearch(arr, 2);
console.log('查找到的数据', num);
