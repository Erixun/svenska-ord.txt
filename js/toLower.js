const fiveLettersJson = require("./fiveLetters.json");
const { shuffle } = require("./shuffle");
fs = require("fs");

const loweredFiveLettersJson = fiveLettersJson.map((word) =>
  word.toLowerCase()
);

const stringifiedUnshuffledJsonData = JSON.stringify(loweredFiveLettersJson);
fs.writeFile("fiveLetters.json", stringifiedUnshuffledJsonData, function (err) {
  if (err) return console.log(err);
});

shuffle(loweredFiveLettersJson);

const stringifiedJsonData = JSON.stringify(loweredFiveLettersJson);
fs.writeFile("fiveLettersShuffled.json", stringifiedJsonData, function (err) {
  if (err) return console.log(err);
});
