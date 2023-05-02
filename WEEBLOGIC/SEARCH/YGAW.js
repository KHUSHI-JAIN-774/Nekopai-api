const yts = require("youtube-yts");
const errorHandler = require("express-async-handler")
const creator = "NekoSenpai69"
const git = require('githubinator');
const { AnimeWallpaper } = require("anime-wallpapers");
const wall = new AnimeWallpaper();


const ytsearch = errorHandler(async (req, res) => {
  let text = req.query.text;
  if(!text) return res.status(404).send("Query not found");

  let search = await yts(text);
  let image = search.all[0].thumbnail;
  let num = 1;

  let txt2 = ` Search Term:_ ${text} Total Results: ${search.all.length}`;
  for (let i of search.all) {
    txt2 += `Result: ${num++} Title:_ ${i.title
                                          } Duration:_ ${i.timestamp},"Link": ${i.url}`;
  }

  res.status(200).send({ "creator": creator, "image": image, "text": txt2 })
})



const github = errorHandler(async (req, res) => {
let account = req.query.account
  if(!account) return res.status(404).send("Query not found");

let user = await git.get(account);
    res.status(200).send({ "creator": creator, "username": user.name,"followers": user.followers,  "following":user.following,"repo":user.public_repos,"image":user.avatar_url,"bio":user.bio })
  })


const animeWallpaper = errorHandler(async(req, res) => {
let text = req.query.anime
  if(!text) return res.status(404).send("Query not found");
const wallpaper = await wall.getAnimeWall2(text)
  
res.status(200).send({"creator":creator,"image":wallpaper[0].image,"title":wallpaper[0].title})
  
})

module.exports = { ytsearch , github ,animeWallpaper }
