const router = require("express").Router();
const { readMe, readAll, readOne, updateUser, remove } = require("../controllers/userController.js")
const { unFollow, follow } = require("../controllers/followController.js")
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("../controllers/verifyTokenController.js")

// GET ME
router.get("/me", verifyToken, readMe);

// GET ALL USER
router.get("/", readAll);

// GET A USER BY ID
router.get("/:id", readOne);

// UPDATE A USER BY ID
router.put("/profile", verifyTokenAndAuthorization, updateUser);

// UPDATE A USER BY ID
router.put("/password", verifyTokenAndAuthorization, updateUser);

// DELET A USER
router.delete("/:id", verifyTokenAndAdmin, remove);

// FOLLOW USER
router.post("/follow-user", verifyTokenAndAuthorization, follow);

// UNFOLLOW USER
router.post("/unfollow-user", verifyTokenAndAuthorization, unFollow);

module.exports = router