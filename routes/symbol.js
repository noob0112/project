const router = require("express").Router()
const {create, readAll, readOne, update, remove } = require("../controllers/symbolController.js")
const {verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin} = require("../controllers/verifyTokenController.js")

// CRETAE SYMBOL
router.post("/", verifyTokenAndAdmin, create)

// GET ALL SYMBOLS
router.get("/", readAll)

// GET A SYMBOL
router.get("/:id", readOne)

// UPDATE A SYMBOL
router.put("/:id", verifyTokenAndAdmin, update)

// DELETE A SYMBOL
router.delete("/:id", verifyTokenAndAdmin, remove)

module.exports = router