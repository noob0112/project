const router = require("express").Router();
const {
  create,
  readAll,
  readOne,
  update,
  remove,
} = require("../controllers/eventController.js");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("../controllers/verifyTokenController.js");

// CRETAE EVENT
router.post("/", verifyTokenAndAdmin, create);

// GET ALL EVENT
router.get("/", verifyTokenAndAdmin, readAll);

// GET A EVENT
router.get("/:id", verifyTokenAndAdmin, readOne);

// UPDATE A EVENT
router.put("/:id", verifyTokenAndAdmin, update);

// DELETE A EVENT
router.delete("/:id", verifyTokenAndAdmin, remove);

module.exports = router;
