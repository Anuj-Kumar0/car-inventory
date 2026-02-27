const { Router } = require("express");
const router = Router();
const categoryController = require("../controllers/categoryController");

router.get("/", categoryController.getAllCategories);
router.post("/", categoryController.createCategory);
router.post(":id/update", categoryController.updateCategory);
router.post("/:id/delete", categoryController.deleteCategory);

module.exports = router;