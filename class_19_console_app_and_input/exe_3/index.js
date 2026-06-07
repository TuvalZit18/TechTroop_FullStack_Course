import { stdout } from "process";
import readline from "readline";
const rl = readline.createInterface({
  input: process.stdin,
  output: stdout,
});
console.log("Registration Summary:");
rl.question("Name: ", (name) => {
  rl.question("Email: ", (email) => {
    rl.question("Age: ", (age) => {
      rl.question("Favorite Color: ", (color) => {
        console.log(
          `Name:${name}\nEmail:${email}\nAge:${age}\nFavourite Color:${color}\n`,
        );
        rl.close();
      });
    });
  });
});
