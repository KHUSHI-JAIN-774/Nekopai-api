const errorHandler = require("express-async-handler");
let creator = "NekoSenpai69"
const { konascrape } = require("../../SCRAPER/Nsfw");


const nsfwkona = errorHandler(async (req, res) => {
  let q = req.query.image;
if(!q) return res.status(404).send("Query not found");
  konascrape(q).then((imgs) => {
    let image = imgs[Math.floor(Math.random() * imgs.length)]
    res.status(200).send({ "creator": creator, "url": image })
  })
})


module.exports = {nsfwkona}
