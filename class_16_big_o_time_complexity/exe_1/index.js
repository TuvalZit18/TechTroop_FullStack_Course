const getBalance = function (bankOperations) {
  let balance = 0;
  for (let op of bankOperations) {
    balance += op;
  }
  return balance;
};

getBalance([-27, -43, -2400, -700, 15000, 58]);

//o(n)
