// Question 1: What is 2 + 2?
// Question 2: What is the capital of France?
// Question 3: What year is it?
// Final Score: 2/3 correct!

import promptSync from "prompt-sync";
const prompt = promptSync();

const ans1 = prompt("What is 2+2? ");
const ans2 = prompt("What is the capital of France? ");
const ans3 = prompt("What year is it? ");

let countCorrect = 0;
if (ans1 === "4") countCorrect++;
if (ans2 === "Paris") countCorrect++;
if (ans3 === "2026") countCorrect++;

console.log(`Final Score ${countCorrect}/3 correct!`);
