import { Bank } from "./bank.js";
import {
  printInstructions,
  printBalance,
  printExit,
  getDeposit,
  getWithdrow,
  getOption,
  printError,
} from "./bankView.js";
let bank = new Bank();
let option;
do {
  printInstructions();
  option = getOption();
  switch (option) {
    case 1:
      printBalance(bank.getBalance(), false);
      break;
    case 2: {
      let depositAmount = getDeposit();
      let isMoneyTransactionSucceed = bank.deposit(depositAmount);
      isMoneyTransactionSucceed === Bank.errorCodes.DEPOSIT_SUCCESS
        ? printBalance(bank.getBalance(), true)
        : printError(Bank.errorCodes.DEPOSIT_FAILURE);
      break;
    }
    case 3: {
      let withdrawAmount = getWithdrow();
      let isMoneyTransactionSucceed = bank.withdraw(withdrawAmount);
      isMoneyTransactionSucceed === Bank.errorCodes.DEPOSIT_SUCCESS
        ? printBalance(bank.getBalance(), true)
        : printError(Bank.errorCodes.WITHDRAW_FAILURE);
      break;
    }
    case 4:
      printExit();
      break;
    default:
      printError("Wrong Option");
      break;
  }
} while (option !== 4);
