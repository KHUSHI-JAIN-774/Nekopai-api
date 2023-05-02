const express = require("express");
const router = express.Router();
const { truth, dare, couplepp, allcheck } = require("./../WEEBLOGIC/FUN/TDCC")
const { pinterest, wikimedia, lyrics } = require("./../WEEBLOGIC/SEARCH/PGLW")
const { ytsearch , github ,animeWallpaper } = require("./../WEEBLOGIC/SEARCH/YGAW")
const { nsfwkona } = require("./../WEEBLOGIC/NSFW/Nsfw")


// Section FUN :-

router.route("/truth").get(truth)

router.route("/dare").get(dare)

router.route("/couplepp").get(couplepp)

router.route("/allcheck").get(allcheck)


// Section SEARCH:-

router.route("/pinterest").get(pinterest)
router.route("/wikimedia").get(wikimedia)
router.route("/lyrics").get(lyrics)

router.route("/github").get(github)

router.route("/animewallpaper").get(animeWallpaper)

router.route("/yts").get(ytsearch)


// section NSFW:-
router.route("/nsfwkona").get(nsfwkona)

module.exports = router
