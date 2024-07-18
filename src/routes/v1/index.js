const express = require("express");
const { InfoController } = require("../../controllers/index");
const AirplaneRoutes = require("./airplane_routes");

const router = express.Router();

router.get("/info", InfoController.info);

router.use("/airplanes", AirplaneRoutes);

module.exports = router;
