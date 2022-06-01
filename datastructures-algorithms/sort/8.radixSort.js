/*
 * @Author: xiumubai 1547702880@qq.com
 * @Date: 2022-05-29 23:34:45
 * @LastEditors: xiumubai 1547702880@qq.com
 * @LastEditTime: 2022-05-30 00:06:28
 * @FilePath: /docs-code/algorithm/排序/8.radixSort.js
 * @Description: 基数排序
 */

function radixSort(array, radixBase = 10) {
  if (array.length < 2) {
    return array;
  }
  const minValue = findMinValue(array);
  const maxValue = findMaxValue(array);
  let significantDigit = 1;
  while ((maxValue - minValue) / significantDigit >= 1) {
    array = countingSortForRadix(array, radixBase, significantDigit, minValue);
    significantDigit *= radixBase;
  }
  return array;
}

function getBucketIndex(value, minValue, significantDigit, radixBase) {
  return Math.floor(((value - minValue) / significantDigit) % radixBase);
}

function countingSortForRadix(array, radixBase, significantDigit, minValue) {
  let bucketsIndex;
  const buckets = [];
  const aux = [];
  for (let i = 0; i < radixBase; i++) {
    buckets[i] = 0;
  }
  for (let i = 0; i < array.length; i++) {
    bucketsIndex = getBucketIndex(
      array[i],
      minValue,
      significantDigit,
      radixBase
    );
    buckets[bucketsIndex]++;
  }
  for (let i = 1; i < radixBase; i++) {
    buckets[i] += buckets[i - 1];
  }
  for (let i = array.length - 1; i >= 0; i--) {
    bucketsIndex = getBucketIndex(
      array[i],
      minValue,
      significantDigit,
      radixBase
    );
    aux[--buckets[bucketsIndex]] = array[i];
  }
  for (let i = 0; i < array.length; i++) {
    array[i] = aux[i];
  }
  return array;
}

function findMinValue(array) {
  let min = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
    }
  }
  return min;
}

function findMaxValue(array) {
  let max = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  return max;
}

const arr = [5, 4, 5, 3, 4, 2, 1];
console.log('未排序的数组', arr);
const sortArr = radixSort(arr);
console.log('排序后的数组', sortArr);
