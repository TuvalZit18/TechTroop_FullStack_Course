// #13
// Given a string, return the length of the longest substring
// that contains no repeating characters.
//
// Constraints: the string may contain letters, digits, and spaces.
// An empty string should return 0.
//
// Input:  "abcabcbb"  →  Output: 3  ("abc")
// Input:  "bbbbb"     →  Output: 1  ("b")
// Input:  "pwwkew"    →  Output: 3  ("wke")
// Input:  ""          →  Output: 0

function lengthOfLongestSubstring(str) {
  if (str.length == -0) return 0;

  let chars = str.split("");
  let window = [];
  let maxWindow = Number.MIN_SAFE_INTEGER;
  let left = 0;
  for (let right = 0; right < chars.length; right++) {
    window.push(chars[right]);
    while ([...new Set(window)].length < window.length) {
      if (chars[left] === chars[right]) {
        maxWindow = Math.max(maxWindow, right - left);
      }
      left++;
      window.shift();
    }
  }
  maxWindow = Math.max(maxWindow, window.length);
  return maxWindow;
}

// Tests
// console.log(lengthOfLongestSubstring("bcbf")); // ->3
// console.log(lengthOfLongestSubstring("abcd")); // ->4
// console.log(lengthOfLongestSubstring("abcabcbb")); // → 3
// console.log(lengthOfLongestSubstring("bbbbb")); // → 1
// console.log(lengthOfLongestSubstring("pwwkew")); // → 3
// console.log(lengthOfLongestSubstring("")); // → 0
// console.log(lengthOfLongestSubstring("abcdefhabcbb")); // → 7
// console.log(lengthOfLongestSubstring("abba")); // → 2
