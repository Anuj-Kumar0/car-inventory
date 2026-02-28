const { Router } = require("express");
const router = Router();
const categoryController = require("../controllers/categoryController");
const verifyAdmin = require("../middleware/auth");

router.get("/", categoryController.getAllCategories);
router.get("/category", (req, res) => {
    res.redirect("/");
  });
router.post("/", categoryController.createCategory);
router.post("/:id/update", verifyAdmin, categoryController.updateCategory);
router.post("/:id/delete", verifyAdmin, categoryController.deleteCategory);

module.exports = router;