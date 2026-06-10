import { alphabet } from "./alphabet.js";
import { BSNode as BSTree } from "./BinarySearch.js";

class ScoreTree extends BSTree {
  constructor(value, score) {
    super(value);
    this.score = score;
  }
  insertNode(key, score) {
    //this function inserts a letter into the morse code tree - this should run once in the beginning
    if (!this.value) {
      this.value = key;
      this.score = score;
    } else if (score > this.score && this.rightChild) {
      this.rightChild.insertNode(key, score);
    } else if (score <= this.score && this.leftChild) {
      this.leftChild.insertNode(key, score);
    } else if (score <= this.score) {
      this.leftChild = new ScoreTree(key, score);
    } else {
      this.rightChild = new ScoreTree(key, score);
    }
  }
  // this method should record the path to a given letter
  findLetter(letter, path) {
    let findScore = alphabet[letter.toUpperCase()];
    if (findScore < this.score && this.leftChild) {
      path.push(".");
      return this.leftChild.findLetter(letter, path);
    } else if (findScore > this.score && this.rightChild) {
      path.push("-");
      return this.rightChild.findLetter(letter, path);
    } else if (findScore === this.score) {
      return this;
    } else return false;
  }

  //this method should translate a given word from text to Morse Code
  translateWord(str) {
    const words = str.split(" ");
    let translatedWord = "";
    let path;
    for (let i = 0; i < words.length; i++) {
      const letters = words[i].split("");
      for (const letter of letters) {
        path = [];
        this.findLetter(letter, path);
        translatedWord += path.join("") + " ";
      }
      if (i + 1 < words.length) translatedWord += " / ";
    }
    console.log(translatedWord);
  }
  // this function should translate a given code from Morse to English
  translateMorse(morse) {
    let letters = morse.split(" ");
    let currentNode;
    let translatedCode = "";
    for (let i = 0; i < letters.length; i++) {
      currentNode = this;
      let dot_dash = letters[i];
      if (dot_dash === "/") translatedCode += " ";
      else {
        while (dot_dash.length > 0 && currentNode !== null) {
          if (dot_dash[0] === ".") {
            currentNode = currentNode.leftChild;
          } else {
            currentNode = currentNode.rightChild;
          }
          dot_dash = dot_dash.slice(1);
        }
        translatedCode += currentNode.value;
      }
    }
    console.log(translatedCode);
  }
}
//initializing the MorseCode tree
const morseCode = new ScoreTree("TOP", 50);
Object.keys(alphabet).forEach((letter) => {
  morseCode.insertNode(letter, alphabet[letter]);
});

morseCode.translateWord("welcome"); // should print .-- . .-.. -.-. --- -- .
morseCode.translateWord("elevation is cool"); // should print . .-.. . ...- .- - .. --- -. /.. ... /-.-. --- --- .-..
morseCode.translateMorse("... --- ...");
morseCode.translateMorse(
  "-. .. -.-. . / .--- --- -... / --- -. / - .... . / .-.. . ... ... --- -.",
);
