const factorials = function (number) {
  if (number === 0 || number === 1) return 1;
  else return factorials(number - 1) * number;
};
console.log("🚀 ~factoraial:  ", factorials(10));
