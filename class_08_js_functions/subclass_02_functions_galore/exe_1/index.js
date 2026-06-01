const people_info = [
  {
    name: "guido",
    profession: "bungalow builder",
    age: 17,
    country: "canaland",
    city: "sydurn",
    catchphrase: "what a piece of wood!",
  },
  {
    name: "petra",
    profession: "jet plane mechanic",
    age: 31,
    country: "greenmark",
    city: "bostork",
    catchphrase: "that's my engine, bub",
  },
  {
    name: "damian",
    profession: "nursery assistant",
    age: 72,
    country: "zimbia",
    city: "bekyo",
    catchphrase: "with great responsibility comes great power",
  },
];

const capitalize = function (str) {
  let capitalizedStr = "";
  capitalizedStr += str[0].toUpperCase(); // first letter, capitalized
  capitalizedStr += str.slice(1); // rest of the string
  return capitalizedStr;
};

const getAge = function (age) {
  return age > 18 ? `${age} years old` : "an Underage";
};

const capitalizeProfession = function (str) {
  let capitalizedStr = "";
  let words = str.split(" ");
  for (let i = 0; i < words.length; i++) {
    if (i < words.length - 1) capitalizedStr += capitalize(words[i]) + " ";
    else capitalizedStr += capitalize(words[i]); //last word with no space
  }
  return capitalizedStr + " ";
};

let capitalizeCountryAndCity = function (country, city) {
  return "from " + capitalize(city) + ", " + capitalize(country) + ". ";
};

let capitalizeCatchphrase = function (catchphrase) {
  let capitalizedStr = "";
  let words = catchphrase.split(" ");
  for (let i = 0; i < words.length; i++) {
    if (i === 0) capitalizedStr += capitalize(words[i]) + " ";
    else if (i < words.length - 1) {
      capitalizedStr += words[i] + " ";
    } else capitalizedStr += words[i];
  }
  return capitalizedStr;
};
//"Guido is an Underage Bungalow Builder from Sydurn, Canaland. Guido loves to say "What a piece of wood!"."
const getSummary = function (person) {
  let summary = "";
  summary += capitalize(person.name);
  summary += ` is ${getAge(person.age)} `; //Yes - you can put a function call inside the tick quotes!
  summary += capitalizeProfession(person.profession); //call function for profession
  summary += capitalizeCountryAndCity(person.country, person.city);
  summary += `${capitalize(person.name)} loves to say "${capitalizeCatchphrase(person.catchphrase)}"`;
  return summary;
};

console.log(getSummary(people_info[0]));
console.log(getSummary(people_info[1]));
console.log(getSummary(people_info[2]));
