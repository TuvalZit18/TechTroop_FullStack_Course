const capitalize = (str) => {
  let capStr = "";
  capStr += str[0].toUpperCase();
  capStr += str.substring(1).toLowerCase();
  console.log(capStr);
};

capitalize("bOb"); // returns Bob
capitalize("TAYLOR"); // returns Taylor
capitalize("feliSHIA"); // returns Felishia
