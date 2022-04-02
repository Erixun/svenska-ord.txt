const jsonData = require("../json/svenska-ord.json");
fs = require("fs");

const normal = /^([a-zåäö]+)$/g;

const isClean = (word) =>
  !word.includes("-") && !word.includes(" ") && normal.test(word);

const toLower = (word) => word.toLowerCase();

const cleanUpWordList = () => {
  const filteredJsonData = jsonData.filter(isClean).map(toLower);

  const jsonString = JSON.stringify(filteredJsonData);
  fs.writeFile("./json/svenska-ord-clean.json", jsonString, (err) => {
    if (err) {
      return console.log(err);
    }
  });
};

exports.cleanUpWordList = cleanUpWordList;
