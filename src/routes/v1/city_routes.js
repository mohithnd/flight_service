const express = require("express");
const { CityController } = require("../../controllers/index");
const { CityMiddlewares } = require("../../middlewares");

const router = express.Router();

router.post(
  "/",
  CityMiddlewares.validateCreateAndUpdateRequest,
  CityController.createCity
);

router.delete("/:id", CityController.destroyCity);

router.patch(
  "/:id",
  CityMiddlewares.validateCreateAndUpdateRequest,
  CityController.updateCity
);

module.exports = router;
