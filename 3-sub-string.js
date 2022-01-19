function maxSumofK(arr, k) {
  let max = 0;
  let sum = 0;
  //find initial sum of first k elements
  for (let n = 0; n < k; n++) {
    sum += arr[n];
    max = sum;
  }
  //iterate the array once and increment the right edge
  for (let i = k; i < arr.length; i++) {
    const temp1 = arr[i] - arr[i - k];
    const temp = sum + arr[i] - arr[i - k];
    sum += arr[i] - arr[i - k];
    //compare if sum is more than max, if yes then replace max with new sum value
    if (sum > max) {
      max = sum;
    }
  }
  return max;
}

let arr = [100, 4, 2, 10, 2, 3, 1, 0, 20];
console.log(maxSumofK(arr, 4));
//output 28
