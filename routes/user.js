const router = require("express").Router();
const { readAll, readOne, update, remove } = require("../controllers/userController.js")
const { unFollow, follow } = require("../controllers/followController.js")
const {verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin} = require("../controllers/verifyTokenController.js")

// GET ALL USER
router.get("/", verifyToken, readAll);

// GET A USER BY ID
router.get("/:id", verifyToken, readOne);

// UPDATE A USER BY ID
router.put("/:id", verifyTokenAndAuthorization, update);

// DELET A USER
router.delete("/:id", remove);

// FOLLOW USER
router.post("/follow-user", verifyToken, follow);

// UNFOLLOW USER
router.post("/unfollow-user", verifyToken, unFollow);

module.exports = router