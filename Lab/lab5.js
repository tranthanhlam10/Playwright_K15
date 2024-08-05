/**
 * Given string: Hello ban, tui ten Teo, ban cung cung ten Teo luon ah
 * --> output:
 * Hey: 1
 * ban: 2
 * tui: 1
 * ten: 2
 * Teo: 2
 * ...
 * Please solve the excersize for countWords by using object, not a Map (do NOT use Object.entries() method to get a map)
The program need to allow user to input a sentence, not hard code (optional)
 */

const readlineSync = require("readline-sync");

let inputString = readlineSync.question("Input your string");

//const str = "The quick brown fox   1    4 ^^    jumps over the Lazy dog.";

console.log(countWords(inputString));



function countWords(str) {
  const wordCount = {};
  const words = str
    .toLowerCase()
    .replace(/[^a-zA-Z0-9\s]/g, "")
    .split(/\s+/);
  for (let word of words) {
    if (wordCount[word]) {
      wordCount[word]++;
    } else {
      wordCount[word] = 1;
    }
  }
  return wordCount;
}
