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

  async function updateCategory(id, name, description) {
    await pool.query(
      "UPDATE categories SET name = $1, description = $2 WHERE id = $3",
      [name, description, id]
    );
  }
  
  async function getCategoryById(id) {
    const { rows } = await pool.query(
      "SELECT * FROM categories WHERE id = $1",
      [id]
    );
    return rows[0];
  }
  
  async function getCarsByCategoryId(categoryId) {
    const { rows } = await pool.query(
      "SELECT * FROM cars WHERE category_id = $1 ORDER BY name ASC",
      [categoryId]
    );
    return rows;
  }
  
  async function insertCar(name, description, brand, price, categoryId) {
    await pool.query(
      `INSERT INTO cars (name, description, brand, price, category_id)
       VALUES ($1, $2, $3, $4, $5)`,
      [name, description, brand, price, categoryId]
    );
  }
  
  async function deleteCarById(id) {
    await pool.query("DELETE FROM cars WHERE id = $1", [id]);
  }

  async function updateCar(id, name, description, brand, price) {
    await pool.query(
      `UPDATE cars
       SET name = $1,
           description = $2,
           brand = $3,
           price = $4
       WHERE id = $5`,
      [name, description, brand, price, id]
    );
  }
  
  module.exports = {
    getCategories,
    insertCategory,
    deleteCategoryById,
    updateCategory,
    getCategoryById,
    getCarsByCategoryId,
    insertCar,
    deleteCarById,
    updateCar
  };