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

module.exports = {
  getAllCategories,
};