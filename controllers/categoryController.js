const storage = require("../db/queries");

const getAllCategories = async (req, res) => {
  try {
    const categories = await storage.getCategories();
    res.render("index", { categories });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
};

const createCategory = async (req, res) => {
  try {
    const { name, description } = req.body;
    await storage.insertCategory(name, description);
    res.redirect("/");
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
};

const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;
    await storage.deleteCategoryById(id);
    res.redirect("/");
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
};

const updateCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description } = req.body;
    await storage.updateCategory(id, name, description);
    res.redirect("/");
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
};

module.exports = {
  getAllCategories,
  createCategory,
  deleteCategory,
  updateCategory,
};