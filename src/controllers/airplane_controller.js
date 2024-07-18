const { AirplaneService } = require("../services");
const { StatusCodes } = require("http-status-codes");
const { ErrorResponse, SuccessResponse } = require("../utils/common");

async function createAirplane(req, res) {
  try {
    const airplane = await AirplaneService.createAirplane({
      modelNumber: req.body.modelNumber,
      capacity: req.body.capacity,
    });
    SuccessResponse.message = "Successfully Created An Airplane.";
    SuccessResponse.data = airplane;
    return res.status(StatusCodes.CREATED).json(SuccessResponse);
  } catch (err) {
    ErrorResponse.error = err;
    ErrorResponse.message = "Something Went Wrong While Creating An Airplane.";
    return res.status(err.statusCode).json(ErrorResponse);
  }
}

module.exports = {
  createAirplane,
};
