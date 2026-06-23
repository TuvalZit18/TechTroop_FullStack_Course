function firstNonRepeating(str) {
  let countChar = {};
  for (let i = 0; i < str.length; i++) {
    countChar[str.charAt(i)] = (countChar[str.charAt(i)] || 0) + 1;
  }
  for (const char of str) {
    if (countChar[char] === 1) return char;
  }
  return null;
}
console.log(firstNonRepeating("leetcode")); //->l
console.log(firstNonRepeating("aabb")); //->null
console.log(firstNonRepeating("aabbc")); //->c
