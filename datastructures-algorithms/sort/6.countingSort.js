/*
 * @Author: xiumubai 1547702880@qq.com
 * @Date: 2022-05-29 21:38:04
 * @LastEditors: xiumubai 1547702880@qq.com
 * @LastEditTime: 2022-05-29 22:41:50
 * @FilePath: /docs-code/algorithm/排序/6.countingSort.js
 * @Description: 计数排序
 */

function countingSort(array) {
  if (array.length < 2) {
    return array;
  }
  const maxValue = findMaxValue(array);
  // 计数数组
  const counts = new Array(maxValue + 1);
  array.forEach((ele) => {
    console.log(ele);
    if (!counts[ele]) {
      counts[ele] = 0;
    }
    counts[ele]++;
  });

  let sortIndex = 0;
  counts.forEach((count, i) => {
    while (count > 0) {
      array[sortIndex++] = i;
      count--;
    }
  });
  console.log(counts);
  return array;
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
const sortArr = countingSort(arr);
console.log('排序后的数组', sortArr);

// 复杂度为O(nlog(n))
