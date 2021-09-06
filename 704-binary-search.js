/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  if (nums.length === 1) {
    if (nums[0] === target) {
      return 0;
    } else {
      return -1;
    }
  } else if (nums.length === 0) {
    return -1;
  }

  const middleIndex = Math.ceil(nums.length / 2);
  if (nums[middleIndex] === target) {
    return middleIndex;
  } else if (nums[middleIndex] > target) {
    const leftArray = nums.slice(0, middleIndex);
    return search(leftArray, target);
  } else {
    const rightArray = nums.slice(middleIndex + 1);
    return search(rightArray, target);
  }
};

let input1 = [-1, 0, 3, 5, 9, 12];
let target1 = 9;

let input2 = [-1, 0, 3, 5, 9, 12];
let target2 = 2;

console.log(search(input1, target1));
console.log(search(input2, target2));
