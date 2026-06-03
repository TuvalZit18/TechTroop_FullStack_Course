const doesUserExist = function (name) {
  const users = [
    { name: "Shapira", age: 19 },
    { name: "Lucius", age: 23 },
  ];
  for (let u of users) {
    if (u.name == name) {
      const found = true;
    }
  }
  return found;
};

const userExists = doesUserExist("Lucius");
if (userExists) {
  console.log("We found the ragamuffin!");
} else {
  console.log("No idea where this person is.");
}
