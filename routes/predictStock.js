const router = require("express").Router()
const { readAll } = require("../controllers/predictStockController.js")

router.get("/", readAll)

module.exports = router