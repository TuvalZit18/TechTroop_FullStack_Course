// let meatArr = ["beef", "chicken", "rabbit"];
// let vegetableArr = ["carrots", "potatoes", "lettuce"];

let meatArr = ["beef", "chicken"];
let vegetableArr = ["rabbit", "carrots", "potatoes", "lettuce"];

meatArr = [...meatArr, ...vegetableArr.splice(0, 1)];

console.log("🚀 ~ meatArr:", meatArr);
console.log("🚀 ~ vegetableArr:", vegetableArr);
