import promptSync from "prompt-sync";
const prompt = promptSync();
export const printInstructions = () => {
  console.log(
    "=== Banking System===\n1)\tCheck Balance\n2)\tDeposit Money\n3)\tWithdraw Money\n4)\tExit\n",
  );
};

export const getOption = () => {
  return +prompt("Choose option (1-4): ");
};

export const printBalance = (balance, isUpdated) => {
  isUpdated
    ? console.log(`New balance: $${balance}\n`)
    : console.log(`The current balance is: $${balance}\n`);
};

export const getDeposit = () => {
  return +prompt("Enter amount to deposit: $");
};

export const getWithdrow = () => {
  return +prompt("Enter amount to withdrow: $");
};

export const printExit = () => {
  console.log("Closing the Bank.\nHave a great day");
};

export const printError = (error) => {
  console.log(`Bank Error: ${error}\n`);
};
