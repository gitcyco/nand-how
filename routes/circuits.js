const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
// const postsController = require("../controllers/posts");
const circuitsController = require("../controllers/circuits");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Circuit Routes - simplified for now
// router.get("/", ensureAuth, circuitsController.getCircuit);
router.get("/load/:id", ensureAuth, circuitsController.getCircuit);

router.get("/listCircuits", ensureAuth, circuitsController.listCircuits);
router.put("/createCircuit", ensureAuth, circuitsController.createCircuit);

// router.put("/likePost/:id", postsController.likePost);
//
// router.delete("/deletePost/:id", postsController.deletePost);

module.exports = router;
