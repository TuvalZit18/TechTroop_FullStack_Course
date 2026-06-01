const checkExists = function (array, number) {
  for (const num of array) {
    if (num === number) return true;
  }
  return false;
};

let res1 = checkExists([1, 2, 3], 2);
let res2 = checkExists([1, 2, 3], 5);
console.log(res1, res2);
