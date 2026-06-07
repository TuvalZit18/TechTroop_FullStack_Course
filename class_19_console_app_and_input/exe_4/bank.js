export class Bank {
  static errorCodes = {
    DEPOSIT_SUCCESS: "DEPOSIT_SUCCESS",
    DEPOSIT_FAILURE: "DEPOSIT_FAILURE",
    WITHDRAW_SUCCESS: "WITHDRAW_SUCCESS",
    WITHDRAW_FAILURE: "WITHDRAW_FAILURE",
  };
  constructor() {
    this._balance = 0;
  }

  deposit(money) {
    if (money > 0) {
      this._balance += money;
      return Bank.errorCodes.DEPOSIT_SUCCESS;
    }
    return Bank.errorCodes.DEPOSIT_FAILURE;
  }

  withdraw(money) {
    if (money > this._balance || money <= 0)
      return Bank.errorCodes.WITHDRAW_FAILURE;
    this._balance -= money;
    return Bank.errorCodes.WITHDRAW_SUCCESS;
  }

  getBalance() {
    return this._balance;
  }
}
