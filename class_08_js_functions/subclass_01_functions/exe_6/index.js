const isArmstrong = function (number) {
  let sum = 0;
  let temp = number;
  while (temp > 0) {
    sum += Math.pow(temp % 10, 3);
    temp = Math.floor(temp / 10);
  }
  return number === sum;
};
const print3DigitsArmstrong = function () {
  console.log("3 digits Armstrong Numbers");
  for (let i = 100; i < 1000; i++) {
    if (isArmstrong(i)) console.log(i + "\n");
  }
};
const print2DigitsArmstrong = function () {
  console.log("2 digits Armstrong Numbers");
  for (let i = 10; i < 100; i++) {
    if (isArmstrong(i)) console.log(i + "\n");
  }
};
const printSingleDigitsArmstrong = function () {
  console.log("single digits Armstrong Numbers");
  for (let i = 0; i < 10; i++) {
    if (isArmstrong(i)) console.log(i + "\n");
  }
};
printSingleDigitsArmstrong();
print2DigitsArmstrong();
print3DigitsArmstrong();
