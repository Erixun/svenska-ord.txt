//TODO: cleanup svenska-ord.json, remove non-word characters & whitespace & convert to lower-case
//TODO: write clean array/json to new file svenska-ord-clean.json

// const { cleanUpWordList } = require("./cleanUpWordList");
// cleanUpWordList();

//TODO: use clean word list to, for each word,
//TODO: query & fetch saol html doc for the word
//TODO: extract all inflections of the word
const throttledQueue = require("throttled-queue");
const cheerio = require("cheerio");

const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

const jsonWords = require("../json/svenska-ord-clean.json");
fs = require("fs");

generateInflections(jsonWords);

const generateInflections = (words) => {
  const throttle = throttledQueue(20, 1000);
  words.forEach(async (word) => {
    const localSet = new Set();
    const html = await throttle(() => {
      return fetch(`https://svenska.se/saol/?sok=${word}&pz=1`)
        .then((resp) => resp.text())
        .catch((err) => console.log(err));
    });
    const $ = cheerio.load(html);
    const container = $(".lemma").html();
    $(".bform", container).each((_i, el) => localSet.add(el.firstChild.data));

    fs.appendFile(
      "./json/svenska-ord-inflections.json",
      JSON.stringify([...localSet]),
      (err) => {
        if (err) {
          console.error(err);
          return;
        }
      }
    );
  });
};
