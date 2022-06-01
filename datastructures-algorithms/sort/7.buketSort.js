/*
 * @Author: xiumubai 1547702880@qq.com
 * @Date: 2022-05-29 22:50:04
 * @LastEditors: xiumubai 1547702880@qq.com
 * @LastEditTime: 2022-05-29 23:12:25
 * @FilePath: /docs-code/algorithm/排序/7.buketSort.js
 * @Description: 桶排序
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
 * @description: 桶排序
 * @param {*} array
 * @param {*} bucketSize
 * @return {*}
 */
function bucketSort(array, bucketSize = 5) {
  if (array.length < 2) {
    return array;
  }
  const bucktes = createBuckets(array, bucketSize);
  return sortBucktes(bucktes);
}

function createBuckets(array, bucketSize) {
  let minValue = array[0];
  let maxValue = array[0];

  for (let i = 1; i < array.length; i++) {
    if (array[i] < minValue) {
      minValue = array[i];
    } else if (array[i] > maxValue) {
      maxValue = array[i];
    }
  }
  const bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
  const buckets = [];
  for (let i = 0; i < bucketCount; i++) {
    buckets[i] = [];
  }
  for (let i = 0; i < array.length; i++) {
    const bucketIndex = Math.floor((array[i] - minValue) / bucketSize);
    buckets[bucketIndex].push(array[i]);
  }
  return buckets;
}

function sortBucktes(buckets) {
  const sortedArray = [];
  for (let i = 0; i < buckets.length; i++) {
    if (buckets[i] != null) {
      insertionSort(buckets[i]);
      sortedArray.push(...buckets[i]);
    }
  }
  return sortedArray;
}

const arr = [5, 4, 5, 3, 4, 2, 1];
console.log('未排序的数组', arr);
const sortArr = bucketSort(arr);
console.log('排序后的数组', sortArr);
