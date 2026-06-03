const reverseString = function (str) {
  if (str.length === 0) return;
  if (str.length === 1) return str;
  return str[str.length - 1] + reverseString(str.slice(0, str.length - 1));
};
console.log("🚀 ~ reverseString ~ reverseString:", reverseString("hello"));
