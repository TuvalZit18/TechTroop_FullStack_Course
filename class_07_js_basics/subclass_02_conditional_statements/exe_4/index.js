let usernameLength = 6;
let passwordLength = 8;
let userAge = 12;

if (usernameLength >= 5 && passwordLength >= 8 && userAge >= 13)
  console.log("User can create an account");
else {
  if (!(usernameLength >= 5))
    console.log("Username must be at least 5 characters");
  else if (!(passwordLength >= 8))
    console.log("Password must be at least 8 characters");
  else if (!(userAge >= 13)) console.log("User must be 13 or older");
}
