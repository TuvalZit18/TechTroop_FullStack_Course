let num1 = +process.argv[2];
let num2 = +process.argv[4];

let op = process.argv[3];
let result;
switch (op) {
  case "+":
    result = num1 + num2;
    break;
  case "-":
    result = num1 - num2;
    break;
  case "*":
    result = num1 * num2;
    break;
  default:
    result = num1 / num2;
    break;
}

console.log(`Output: ${num1} ${op} ${num2} = ${result}`);
