var express = require("express")
var router = express.Router()

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
]

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Mini Messageboard", messages: messages })
})

module.exports = router
router.post("/new", (req, res, next) => {
  messages.push({ text: messageText, user: messageUser, added: new Date() })
  res.render("form")
  res.redirect("/")
})
