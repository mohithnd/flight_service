const express = require("express");
const { AirplaneController } = require("../../controllers/index");
const { AirplaneMiddlewares } = require("../../middlewares");

const router = express.Router();

router.post(
  "/",
  AirplaneMiddlewares.validateCreateRequest,
  AirplaneController.createAirplane
);

module.exports = router;
