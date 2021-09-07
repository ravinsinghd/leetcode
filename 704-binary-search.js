/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let startIndex = 0;
  let endIndex = nums.length - 1;

  while (startIndex <= endIndex) {
    let pivot = Math.ceil((endIndex - startIndex) / 2) + startIndex;
    if (nums[pivot] === target) {
      return pivot;
    } else if (nums[pivot] < target) {
      startIndex = pivot + 1;
    } else if (nums[pivot] > target) {
      endIndex = pivot - 1;
    }
  }
  return -1;
};

// let input1 = [-1, 0, 3, 5, 9, 12];
// let target1 = 9;

// let input2 = [-1, 0, 3, 5, 9, 12];
// let target2 = 2;

// console.log(search(input1, target1));
// console.log(search(input2, target2));
