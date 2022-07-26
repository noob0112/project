const router = require("express").Router()
const { readAll, readOne, findStockToday } = require("../controllers/stockController.js")

// GET LIST Comments
router.get("/", readAll)

router.get("/today", findStockToday)

// GET A POST
router.get("/:id", readOne)

module.exports = router