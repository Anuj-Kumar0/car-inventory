const storage = require("../db/queries");

const getAllCategories = async (req, res, next) => {
  try {
    const categories = await storage.getCategories();
    res.render("index", { categories });
  } catch (err) {
    next(err);
  }
};

const createCategory = async (req, res, next) => {
  try {
    const { name, description } = req.body;
    await storage.insertCategory(name, description);
    res.redirect("/");
  }catch (err) {
    next(err);
  }
};

const deleteCategory = async (req, res, next) => {
  try {
    const { id } = req.params;
    await storage.deleteCategoryById(id);
    res.redirect("/");
  } catch (err) {
    next(err);
  }
};

const updateCategory = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, description } = req.body;
    await storage.updateCategory(id, name, description);
    res.redirect("/");
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAllCategories,
  createCategory,
  deleteCategory,
  updateCategory,
};