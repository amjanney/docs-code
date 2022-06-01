/*
 * @Author: xiumubai 1547702880@qq.com
 * @Date: 2022-05-28 17:07:06
 * @LastEditors: xiumubai 1547702880@qq.com
 * @LastEditTime: 2022-05-29 21:32:47
 * @FilePath: /docs-code/javascript/数据结构与算法/排序/quickSort.js
 * @Description: 快速排序
 */

/**
 
快速排序也许是最常用的排序算法了。它的复杂度为O(nlog(n))，且性能通常比其他复杂度为O(nlog(n))的排序算法要好。
和归并排序一样，快速排序也使用分而治之的方法，将原始数组分为较小的数组（但它没有像归并排序那样将它们分割开）。
快速排序比目前学过的其他排序算法要复杂一些。让我们一步步地来学习。
(1) 首先，从数组中选择一个值作为主元（pivot），也就是数组中间的那个值。
(2) 创建两个指针（引用），左边一个指向数组第一个值，右边一个指向数组最后一个值。移动左指针直到我们找到一个比主元大的值，接着，移动右指针直到找到一个比主元小的值，然后交换它们，重复这个过程，直到左指针超过了右指针。这个过程将使得比主元小的值都排在主元之前，而比主元大的值都排在主元之后。这一步叫作划分（partition）操作。
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

function quickSort(array, compareFn = defaultCompare) {
  return quick(array, 0, array.length - 1, compareFn);
}

function quick(array, left, right, compareFn) {
  let index;
  if (arr.length > 1) {
    index = partition(array, left, right, compareFn);
    if (index < index - 1) {
      quick(array, left, index - 1, compareFn);
    }
    if (index < right) {
      quick(array, index, right, compareFn);
    }
  }
  return array;
}

/**

选择主元素

最简单的一种是选择数组的第一个值（最左边的值）。然而，研究表明对于几乎已排序的数组，这不是一个好的选择，它将导致该算法的最差表现。另外一种方式是随机选择数组的一个值或是选择中间的值。

 */

function partition(array, left, right, compareFn) {
  const pivot = array[Math.floor((right + left) / 2)];
  let i = left;
  let j = right;
  while (i < j) {
    while (compareFn(array[i], pivot) === compareFn.LESS_THAN) {
      i++;
    }

    while (compareFn(array[j], pivot) === Compare.BIGGER_THAN) {
      j--;
    }

    if (i <= j) {
      swap(array, i, j);
      i++;
      j++;
    }
  }
  return i;
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
const sortArr = quickSort(arr);
console.log('排序后的数组', sortArr);

// 复杂度为O(nlog(n))
