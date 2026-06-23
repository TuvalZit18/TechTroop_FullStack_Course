function longestSubarray(arr, target) {
  let currentSum = 0;
  let currentLength = 0;
  let left = 0;
  let maxLength = 0;
  for (let right = 0; right < arr.length; right++) {
    while (currentSum + arr[right] > target) {
      currentSum -= arr[left];
    }
    currentSum += arr[right];
    left++;
  }
  return maxLength;
}
//Tests
console.log(longestSubarray([1, 2, 3, 4, 5], 8)); // --> 3
console.log(longestSubarray([3, 1, 2, 1], 4)); // --> 3
console.log(longestSubarray([5, 6, 7], 4)); // --> 0
console.log(longestSubarray([1, 1, 1, 1], 3)); // --> 3
