const Bank = function () {
  let money = 500;
  const depositCash = function (cash) {
    money += cash;
  };
  const checkBalance = function () {
    console.log(`The Current Balance is: ${money}`);
  };
  return { deposit: depositCash, showBalance: checkBalance };
};

const bank = Bank();
bank.deposit(200);
bank.deposit(250);
bank.showBalance(); //should print 950
