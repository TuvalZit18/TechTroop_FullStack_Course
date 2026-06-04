const findDuplicates = function (arr) {
  let countObj = {};
  for (const item of arr) {
    if (countObj[item]) {
      console.log(`There is a duplicate -> ${item}`);
      return;
    }
    countObj[item] = 1;
  }
  console.log("The Array contains only Unique values");
};

let arr = [1, 2, 3, -4, 5, 6, 7, 8, 9, 0, 7];
findDuplicates(arr);
