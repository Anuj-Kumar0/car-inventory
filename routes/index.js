const { Router } = require("express");
const router = Router();
const categoryController = require("../controllers/categoryController");

router.get("/", categoryController.getAllCategories);

module.exports = router;