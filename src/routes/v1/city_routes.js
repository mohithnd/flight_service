const express = require("express");
const { CityController } = require("../../controllers/index");
const { CityMiddlewares } = require("../../middlewares");

const router = express.Router();

router.post(
  "/",
  CityMiddlewares.validateCreateRequest,
  CityController.createCity
);

router.delete("/:id", CityController.destroyCity);

module.exports = router;
