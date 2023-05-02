const Truth = require("../../JSON/Truth.json")
const Dare = require("../../JSON/Dare.json")
const Couple = require("../../JSON/Couplepp.json")

const errorHandler = require("express-async-handler")
const creator = "Neko Senpai"

const truth = errorHandler(async (req, res) => {
  const truu = Truth[Math.floor(Math.random() * Truth.length)]


  res.status(200).send({ "creator": creator, "truth": truu })
})



const dare = errorHandler(async (req, res) => {
  const daree = Truth[Math.floor(Math.random() * Dare.length)]

  res.status(200).send({ "creator": creator, "dare": daree })
})



const couplepp = errorHandler(async (req, res) => {
  const couple = Couple[Math.floor(Math.random() * Couple.length)]

  res.status(200).send(couple)
})


const allcheck = errorHandler(async (req, res) => {
  const random = Math.floor(Math.random() * 101)
  let check = req.query.check
  if (!check) {
    res.status(404).send("check query not found")
  } else {
    res.status(200).send({ "creator": creator, "check": `${check} :  ${random}%` })
  }
})



module.exports = { truth, dare, couplepp, allcheck }
