const express = require("express");
const router = express.Router();
const { truth, dare, couplepp, allcheck } = require("./../WEEBLOGIC/FUN/TDCC")
const { pinterest, wikimedia, lyrics } = require("./../WEEBLOGIC/SEARCH/PGLW")
const { ytsearch , github ,animeWallpaper } = require("./../WEEBLOGIC/SEARCH/YGAW")
const { nsfwkona } = require("./../WEEBLOGIC/NSFW/Nsfw")
const {glass,marvelstudio2,marvelstudio1,graffiti,captainamerica,pornhub,demon,magma,valentine,thor,addglow,grunge,metal3d,comic,golden,whitegold,sea3d,blackpink,black3d,transformer,harrypotter,paint,pinkgold,burger,neonstyle,slice,neonlight,thunder,matrix,thunder2,neon} = require("./../WEEBLOGIC/TEXTPRO/Textpro")

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


// section TEXTPRO:-
router.route("/glass").get(glass)

router.route("/marvelstudio2").get(marvelstudio2)

router.route("/marvelstudio1").get(marvelstudio1)

router.route("/graffiti").get(graffiti)

router.route("/captainamerica").get(captainamerica)

router.route("/pornhub").get(pornhub)

router.route("/demon").get(demon)

router.route("/magma").get(magma)

router.route("/valentine").get(valentine)

router.route("/thor").get(thor)

router.route("/metal3d").get(metal3d)

router.route("/grunge").get(grunge)

router.route("/addglow").get(addglow)

router.route("/black3d").get(black3d)

router.route("/blackpink").get(blackpink)

router.route("/sea3d").get(sea3d)

router.route("/whitegold").get(whitegold)

router.route("/golden").get(golden)

router.route("/comic").get(comic)

router.route("/pinkgold").get(pinkgold)

router.route("/paint").get(paint)

router.route("/harrypotter").get(harrypotter)

router.route("/transformer").get(transformer)

router.route("/burger").get(burger)

router.route("/slice").get(slice)

router.route("/neonstyle").get(neonstyle)

router.route("/burger").get(burger)

router.route("/neonstyle").get(neonstyle)

router.route("/neonlight").get(neonlight)

router.route("/thunder").get(thunder)

router.route("/matrix").get(matrix)

router.route("/thunder2").get(thunder2)

router.route("/neon").get(neon)






module.exports = router
