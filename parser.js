const jsonData = require('./svenska-ord.json');
fs = require('fs');

const filteredJsonData = jsonData.filter(word => word.length === 6 && !word.includes('-') && !word.includes(' '))
console.log(filteredJsonData[0])

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

// Used like so
shuffle(filteredJsonData);

const stringifiedJsonData = JSON.stringify(filteredJsonData)
fs.writeFile('sixLettersShuffled.json', stringifiedJsonData, function (err) {
  if (err) return console.log(err);
});