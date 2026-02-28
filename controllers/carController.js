const storage = require("../db/queries");

const getCarsByCategory = async (req, res) => {
  try {
    const { id } = req.params;

    const category = await storage.getCategoryById(id);
    const cars = await storage.getCarsByCategoryId(id);

    if (!category) {
      return res.status(404).send("Category not found");
    }

    res.render("cars", { category, cars });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
};

const createCar = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, brand, price } = req.body;

    await storage.insertCar(name, description, brand, price, id);

    res.redirect(`/category/${id}`);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
};

const deleteCar = async (req, res) => {
    try {
      const { id } = req.params;
      const { category_id } = req.body;
  
      await storage.deleteCarById(id);
  
      res.redirect(`/category/${category_id}`);
    } catch (err) {
      console.error(err);
      res.status(500).send("Server Error");
    }
  };

const updateCar = async (req, res) => {
    try {
      const { id } = req.params;
      const { name, description, brand, price, category_id } = req.body;
  
      await storage.updateCar(id, name, description, brand, price);
  
      res.redirect(`/category/${category_id}`);
    } catch (err) {
      console.error(err);
      res.status(500).send("Server Error");
    }
  };

module.exports = {
  getCarsByCategory,
  createCar,
  deleteCar,
  updateCar
};