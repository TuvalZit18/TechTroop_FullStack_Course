const story =
  "In the beginning there was light. Then there were wolves. Finally there was a big fire. Ultimately, Shelob the wolf-master put out the fire with her feet. But until then, the fire caused one heck of a lot of damage.";
const specialChars = [",", ".", "'", '"', "?", "!", ";"];
const wordCounts = {};

const cleanText = function (str, specialChars) {
  for (const char of specialChars) {
    str = str.split(char).join(" ");
  }
  return str;
};
const addToCounter = function (wordsCount, str) {
  let words = str.split(" ");
  for (const word of words) {
    if (wordCounts[word.toLowerCase()]) wordCounts[word]++;
    else wordCounts[word.toLowerCase()] = 1;
  }
};
const countWords = function (str, specialChars, wordCounts) {
  addToCounter(wordCounts, cleanText(story, specialChars));
  console.log(wordCounts);
};

countWords(story, specialChars, wordCounts);
