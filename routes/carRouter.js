const { Router } = require("express");
const router = Router();
const carController = require("../controllers/carController");

router.get("/category/:id", carController.getCarsByCategory);
router.post("/category/:id/cars", carController.createCar);
router.post("/cars/:id/delete", carController.deleteCar);
router.post("/cars/:id/update", carController.updateCar);

module.exports = router;