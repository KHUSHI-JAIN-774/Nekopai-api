const errorHandler = require("express-async-handler")
const { pinterests } = require("../../SCRAPER/pinterest");
const { getThumbnail, getLyrics } = require("@fantox01/lyrics-scraper");
const { wikimedias } = require("../../SCRAPER/Wikimedia");
const creator = "Neko Senpai"

const pinterest = errorHandler(async (req, res) => {
  let q = req.query.q;
  if(!q) return res.status(404).send("Query not found");
  pinterests(q).then((imgs) => {
    let image = imgs[Math.floor(Math.random() * 20)]

    res.status(200).send({ "creator": creator, "url": image })
  })
})


const wikimedia = errorHandler(async (req, res) => {
  let q = req.query.q;
if(!q) return res.status(404).send("Query not found");
  wikimedias(q).then((imgs) => {
    let image = imgs[Math.floor(Math.random() * imgs.length)]

    res.status(200).send({ "creator": creator, "url": image })
  })
})

const lyrics = errorHandler(async(req, res) => {
  let q = req.query.q;
if(!q) return res.status(404).send("Query not found");
  getThumbnail(q).then((thumbnail) => {
    getLyrics(q).then((lyrics) => {
      res.json({"creator": creator, "thumbnail": thumbnail, "lyrics": lyrics} );
    });
  })
})

module.exports = { pinterest, lyrics, wikimedia }
