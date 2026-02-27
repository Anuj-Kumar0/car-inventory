const pool = require("./pool");

async function getCategories() {
    const { rows } = await pool.query(
      "SELECT * FROM categories ORDER BY name ASC"
    );
    return rows;
  
}

async function insertCategory(name, description) {
    await pool.query(
      "INSERT INTO categories (name, description) VALUES ($1, $2)",
      [name, description]
    );
  }
  
  async function deleteCategoryById(id) {
    await pool.query("DELETE FROM categories WHERE id = $1", [id]);
  }
  
  module.exports = {
    getCategories,
    insertCategory,
    deleteCategoryById,
  };