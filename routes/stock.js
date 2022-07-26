const router = require("express").Router()
const { readAll, readOne } = require("../controllers/stockController.js")

// GET LIST Comments
router.get("/", readAll)

// GET A POST
router.get("/:id", readOne)

module.exports = router