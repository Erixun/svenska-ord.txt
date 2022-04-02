const words = require("../json/svenska-ord-inflections.json");
const { shuffle } = require("./shuffle.js");
fs = require("fs");

const parse = (words, length) => {
  const wordsFiltered = words.filter((word) => word.length === length);

  fs.writeFile(
    `./json/words${length}Letters.json`,
    JSON.stringify(wordsFiltered),
    function (err) {
      if (err) return console.log(err);
    }
  );

  shuffle(wordsFiltered);

  fs.writeFile(
    `./json/words${length}LettersShuffled.json`,
    JSON.stringify(wordsFiltered),
    function (err) {
      if (err) return console.log(err);
    }
  );
};

parse(words, 6);
