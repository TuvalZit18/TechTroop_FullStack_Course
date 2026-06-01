const dictionary = {
  A: ["Aardvark", "Abacus", "Actually", "Atomic"],
  B: ["Banana", "Bonkers", "Brain", "Bump"],
  C: ["Callous", "Chain", "Coil", "Czech"],
};
let keys = Object.keys(dictionary);

for (const key of keys) {
  console.log(`Words that begin with ${key}:\n`);
  for (let i = 0; i < dictionary[key].length; i++) {
    console.log(`\t${dictionary[key][i]}\n`);
  }
  for (const word of dictionary[key]) console.log(`\t${word}\n`);
}

for (const key of keys) {
  console.log(`Words that begin with ${key}:\n`);
  for (const word of dictionary[key]) console.log(`\t${word}\n`);
}
