const router = require("express").Router()
const {create, readAll, readOne, update, remove } = require("../controllers/postController.js")
const {verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin} = require("../controllers/verifyTokenController.js")

// CRETAE POST
router.post("/", verifyToken, create)

// GET ALL POST
router.get("/", verifyToken, readAll)

// GET A POST
router.get("/:id", verifyToken, readOne)

// UPDATE A POST
router.put("/:id", verifyTokenAndAuthorization, update)

// DELETE A POST
router.delete("/:id", verifyTokenAndAuthorization, remove)


module.exports = router