const isEven = function (number) {
  return number % 2 === 0;
};

const printOdds = function (array) {
  for (const num of array) {
    if (isEven(num)) console.log(`${num}\n`);
  }
};

printOdds([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
