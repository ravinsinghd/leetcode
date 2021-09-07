/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const search = new Map();
  for (let i = 0; i < nums.length; i++) {
    const difference = target - nums[i];
    const isPresent = search.has(difference);
    if (isPresent) {
      const num1Index = search.get(difference);
      return [num1Index, i];
    } else {
      search.set(nums[i], i);
    }
  }
};
