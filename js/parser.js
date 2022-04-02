const jsonData = require("./svenska-ord.json");
const { shuffle } = require("./shuffle.js");
fs = require("fs");

const filteredJsonData = jsonData
  .filter(
    (word) => word.length === 6 && !word.includes("-") && !word.includes(" ")
  )
  .map((word) => word.toLowerCase());


shuffle(filteredJsonData);

const stringifiedJsonData = JSON.stringify(filteredJsonData);
fs.writeFile("sixLettersShuffled.json", stringifiedJsonData, function (err) {
  if (err) return console.log(err);
});
