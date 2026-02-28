const { Router } = require("express");
const router = Router();
const carController = require("../controllers/carController");
const verifyAdmin = require("../middleware/auth");

router.get("/category/:id", carController.getCarsByCategory);
router.post("/category/:id/cars", carController.createCar);
router.post("/cars/:id/delete", verifyAdmin, carController.deleteCar);
router.post("/cars/:id/update", verifyAdmin, carController.updateCar);

module.exports = router;